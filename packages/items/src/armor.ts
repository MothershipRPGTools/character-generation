import random_default from "random";
import { Item } from "./items";

export class Armor extends Item {
  constructor(
    public readonly name: string,
    public readonly special: string,
    public readonly cost: number,
    public readonly armorPoints: number,
  ) {
    super(name, special, cost);
  }

  public static get random() {
    return random_default.choice(Armor.weapons);
  }

  public static get weapons() {
    return [STANDARDCREWATTIRE, VACCSUIT, HAZARDSUIT, STANDARDBATTLEDRESS, ADVANCEDBATTLEDRESS];
  }
}

export const STANDARDCREWATTIRE = new Armor("Standard Crew Attire", "", 100, 1);
export const VACCSUIT = new Armor(
  "Vaccsuit",
  "Includes short-range comms, headlamp, and radiation shielding. Decompression within 1d5 rounds if punctured.",
  10000,
  3,
);
export const HAZARDSUIT = new Armor(
  "Hazard Suit",
  "Includes air filter, extreme heat/cold protection, hydration reclamation (1L of water lasts 4 days), short-range comms, headlamp, and radiation shielding.",
  4000,
  5,
);
export const STANDARDBATTLEDRESS = new Armor("Standard Battle Dress", "Includes short-range comms.", 2000, 7);
export const ADVANCEDBATTLEDRESS = new Armor(
  "Advanced Battle Dress",
  "Includes short-range comms, body cam, headlamp, HUD, exoskeletal weave (Strength Checks [+]), and radiation shielding. Damage Reduction: 3.",
  12000,
  10,
);
