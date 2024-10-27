import { faker } from "@faker-js/faker";
import random_default from "random";
import { Android, type Class, Marine, Scientist, Teamster } from "./classes";
import type { Skill } from "./skills";

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

const classes = [new Marine(), new Android(), new Scientist(), new Teamster()];

export class Character {
  constructor(
    public maxWounds = 2,
    public skills: Skill[] = [],
    readonly classType: Class | undefined = random_default.choice<Class>(classes),
    readonly saves: Saves = this.rollSaves(),
    readonly stats: Stats = this.rollStats(),
    readonly name: string = faker.person.fullName(),
  ) {
    if (!this.classType) {
      throw new Error("No class type chosen.");
    }

    this.classType.applyStatChanges(this);
    this.skills = this.classType.chooseSkills(this.skills);
  }

  rollStats(): Stats {
    // roll 2d10+25 for each stat
    return {
      strength: Math.floor(random_default.uniformInt(1, 20)()) + 25,
      speed: Math.floor(random_default.uniformInt(1, 20)()) + 25,
      intellect: Math.floor(random_default.uniformInt(1, 20)()) + 25,
      combat: Math.floor(random_default.uniformInt(1, 20)()) + 25,
    };
  }

  rollSaves(): Saves {
    // roll 2d10+10 for each save
    return {
      sanity: Math.floor(random_default.uniformInt(1, 20)()) + 10,
      fear: Math.floor(random_default.uniformInt(1, 20)()) + 10,
      body: Math.floor(random_default.uniformInt(1, 20)()) + 10,
    };
  }
}
