import { MasterSkill } from "@mothership-rpg/char-gen-lib";

function onlyUnique(value: string, index: number, array: string[]) {
  return array.indexOf(value) === index;
}

const connections: string[] = [];
for (const masterSkill of MasterSkill.skills) {
  for (const expertSkill of masterSkill.dependsOn) {
    for (const trainedSkill of expertSkill.dependsOn) {
      connections.push(`${trainedSkill.name.replace(" ", "-")} --> ${expertSkill.name.replace(" ", "-")}`);
      connections.push(`${expertSkill.name.replace(" ", "-")} --> ${masterSkill.name.replace(" ", "-")}`);
    }
  }
}

console.log(" ");
console.log("```mermaid");
console.log("graph LR");
console.log(`    ${connections.filter(onlyUnique).join("\n    ")}`);
console.log("```");
