import { BluntForce, Wound } from "../../packages/wounds/src";

const wound = new Wound(BluntForce);
console.log(wound.rollSeverity());
