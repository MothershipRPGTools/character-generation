import random_default from "random";
import type { Character } from "./character";
import { ExpertSkill, MasterSkill, type Skill, TrainedSkill } from "./skills";

export abstract class Class {
  abstract TRAUMA_RESPONSE: string;

  abstract applyStatChanges(character: Character): Character;
  abstract chooseSkills(currentSkills: Skill[]): Skill[];

  /**
   * Chooses a skill from the skill pool that is not already in the current skills.
   * Throws an error if no available skills are found.
   *
   * @param skillPool - The pool of skills to choose from.
   * @param currentSkills - The list of skills the character currently has.
   * @returns The chosen skill.
   */
  chooseASkill(skillPool: Skill[], currentSkills: Skill[]): Skill {
    const availableSkills = skillPool.filter((skill) => !currentSkills.includes(skill));
    const chosenSkill = random_default.choice(availableSkills);
    if (!chosenSkill) {
      throw new Error("No available skills to choose from.");
    }
    return chosenSkill;
  }
}

export class Marine extends Class {
  TRAUMA_RESPONSE = "Whenever you panic, every close friendly player must make a fear save.";

  applyStatChanges(character: Character) {
    character.stats.combat += 10;
    character.saves.body += 10;
    character.saves.fear += 20;
    character.maxWounds += 1;
    return character;
  }

  chooseSkills(currentSkills: Skill[]): Skill[] {
    currentSkills.push(TrainedSkill.MILITARYTRAINING, TrainedSkill.ATHLETICS);

    // Bonus: 1 Expert Skill OR: 2 Trained Skills
    const chosenSkillType = random_default.choice([ExpertSkill, TrainedSkill]);
    switch (chosenSkillType) {
      case ExpertSkill:
        currentSkills.push(this.chooseASkill(ExpertSkill.skills, currentSkills));
        break;
      case TrainedSkill:
        currentSkills.push(this.chooseASkill(TrainedSkill.skills, currentSkills));
        currentSkills.push(this.chooseASkill(TrainedSkill.skills, currentSkills));
        break;
    }

    return currentSkills;
  }
}

export class Android extends Class {
  TRAUMA_RESPONSE = "Fear saves made by close friendly players are at disadvantage.";

  applyStatChanges(character: Character) {
    character.stats.intellect += 20;
    character.saves.fear += 60;
    character.maxWounds += 1;

    const randomStat = random_default.choice(Object.keys(character.stats));
    if (!randomStat) {
      throw new Error("No random stat chosen.");
    }
    character.stats[randomStat] -= 10;
    return character;
  }

  chooseSkills(currentSkills: Skill[]) {
    currentSkills.push(TrainedSkill.LINGUISTICS, TrainedSkill.COMPUTERS, TrainedSkill.MATHEMATICS);

    // Bonus: 1 Expert Skill OR: 2 Trained Skills
    const chosenSkillType = random_default.choice([ExpertSkill, TrainedSkill]);
    switch (chosenSkillType) {
      case ExpertSkill:
        currentSkills.push(this.chooseASkill(ExpertSkill.skills, currentSkills));
        break;
      case TrainedSkill:
        currentSkills.push(this.chooseASkill(TrainedSkill.skills, currentSkills));
        currentSkills.push(this.chooseASkill(TrainedSkill.skills, currentSkills));
        break;
    }

    return currentSkills;
  }
}

export class Scientist extends Class {
  TRAUMA_RESPONSE = "Whenever you fail a sanity save, all close friendly players gain 1 stress.";

  applyStatChanges(character: Character) {
    character.stats.intellect += 10;
    character.saves.sanity += 30;
    const randomStat = random_default.choice(Object.keys(character.stats));
    if (!randomStat) {
      throw new Error("No random stat chosen.");
    }
    character.stats[randomStat] += 5;
    return character;
  }

  chooseSkills(currentSkills: Skill[]): Skill[] {
    // 1 Master Skill, and an Expert and Trained Skill prerequisite.
    const randomMasterSkill = this.chooseASkill(MasterSkill.skills, currentSkills);
    currentSkills.push(randomMasterSkill);

    if (!randomMasterSkill.dependsOn) {
      throw new Error(`Master skill does not have any dependencies??? Skill: ${randomMasterSkill}`);
    }

    const randomExpertSkill = this.chooseASkill(randomMasterSkill.dependsOn, currentSkills);
    currentSkills.push(randomExpertSkill);

    if (!randomExpertSkill.dependsOn) {
      throw new Error(`Expert skill does not have any dependencies??? Skill: ${randomExpertSkill}`);
    }
    currentSkills.push(this.chooseASkill(randomExpertSkill.dependsOn, currentSkills));

    // Bonus: 1 Trained Skill
    currentSkills.push(this.chooseASkill(TrainedSkill.skills, currentSkills));

    return currentSkills;
  }
}

export class Teamster extends Class {
  TRAUMA_RESPONSE = "Once per session, you may take advantage on a panic check.";

  applyStatChanges(character: Character) {
    for (const stat of Object.keys(character.stats)) {
      character.stats[stat] += 5;
    }

    for (const save of Object.keys(character.saves)) {
      character.saves[save] += 10;
    }

    return character;
  }

  chooseSkills(currentSkills: Skill[]): Skill[] {
    currentSkills.push(TrainedSkill.INDUSTRIALEQUIPMENT, TrainedSkill.ZEROG);

    // Bonus: 1 Trained Skill and 1 Expert Skill.
    const randomExpertSkill = this.chooseASkill(ExpertSkill.skills, currentSkills);
    currentSkills.push(randomExpertSkill);

    if (!randomExpertSkill.dependsOn) {
      throw new Error(`Expert skill does not have any dependencies??? Skill: ${randomExpertSkill}`);
    }
    currentSkills.push(this.chooseASkill(randomExpertSkill.dependsOn, currentSkills));
    return currentSkills;
  }
}
