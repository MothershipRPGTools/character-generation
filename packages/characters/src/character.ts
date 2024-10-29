import { faker } from "@faker-js/faker";
import random_default from "random";
import { Android, type Class, Marine, Scientist, Teamster } from "./classes";
import { Patch } from "./patches";
import type { Skill } from "./skills";
import { Trinket } from "./trinkets";

export type Stats = {
  strength: number;
  speed: number;
  intellect: number;
  combat: number;
  [key: string]: number;
};

export type Saves = {
  sanity: number;
  fear: number;
  body: number;
  [key: string]: number;
};

// Array of available character classes
const classes = [new Marine(), new Android(), new Scientist(), new Teamster()];

/**
 * Represents a character in the game.
 */
export class Character {
  /**
   * Creates a new character.
   * @param maxWounds - The maximum number of wounds the character can sustain.
   * @param skills - The skills the character possesses.
   * @param classType - The class type of the character.
   * @param saves - The saving throws of the character.
   * @param stats - The stats of the character.
   * @param trinket - The trinket the character carries.
   * @param patch - The patch the character carries.
   * @param name - The name of the character.
   */
  constructor(
    public maxWounds = 2,
    public skills: Skill[] = [],
    readonly classType: Class | undefined = random_default.choice<Class>(classes),
    readonly saves: Saves = this.rollSaves(),
    readonly stats: Stats = this.rollStats(),
    readonly trinket: Trinket = new Trinket(),
    readonly patch: Patch = new Patch(),
    readonly name: string = faker.person.fullName(),
  ) {
    if (!this.classType) {
      throw new Error("No class type chosen.");
    }

    this.classType.applyStatChanges(this);
    this.skills = this.classType.chooseSkills(this.skills);
  }

  private roll2d10(): number {
    return Math.floor(random_default.uniformInt(1, 10)()) + Math.floor(random_default.uniformInt(1, 10)());
  }

  rollStats(): Stats {
    // roll 2d10+25 for each stat
    return {
      strength: this.roll2d10() + 25,
      speed: this.roll2d10() + 25,
      intellect: this.roll2d10() + 25,
      combat: this.roll2d10() + 25,
    };
  }

  rollSaves(): Saves {
    // roll 2d10+10 for each save
    return {
      sanity: this.roll2d10() + 10,
      fear: this.roll2d10() + 10,
      body: this.roll2d10() + 10,
    };
  }
}
