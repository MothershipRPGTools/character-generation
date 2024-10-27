// @ts-nocheck
import random_default from "random";
import { type MockedFunction, beforeEach, describe, expect, test, vi } from "vitest";
import { Android, Marine, Scientist, Teamster } from "../src/classes";
import { ExpertSkill, MasterSkill, type Skill, TrainedSkill } from "../src/skills";

vi.mock("random", () => ({
  default: {
    choice: vi.fn(),
  },
}));

describe("Class Tests", () => {
  let character: any;

  beforeEach(() => {
    character = {
      stats: { combat: 0, intellect: 0, strength: 0 },
      saves: { body: 0, fear: 0, sanity: 0 },
      maxWounds: 0,
    };
  });

  describe("Marine", () => {
    test("applyStatChanges", () => {
      const marine = new Marine("Marine");
      marine.applyStatChanges(character);
      expect(character.stats.combat).toBe(10);
      expect(character.saves.body).toBe(10);
      expect(character.saves.fear).toBe(20);
      expect(character.maxWounds).toBe(1);
    });

    test("chooseSkills", () => {
      const marine = new Marine("Marine");
      const currentSkills: Skill[] = [];
      random_default.choice.mockReturnValueOnce(ExpertSkill).mockReturnValueOnce(ExpertSkill.skills[0]);
      marine.chooseSkills(currentSkills);
      expect(currentSkills).toContain(TrainedSkill.MILITARYTRAINING);
      expect(currentSkills).toContain(TrainedSkill.ATHLETICS);
      expect(currentSkills).toContain(ExpertSkill.skills[0]);
    });
  });

  describe("Android", () => {
    test("applyStatChanges", () => {
      const android = new Android("Android");
      random_default.choice.mockReturnValueOnce("strength");
      android.applyStatChanges(character);
      expect(character.stats.intellect).toBe(20);
      expect(character.saves.fear).toBe(60);
      expect(character.maxWounds).toBe(1);
      expect(character.stats.strength).toBe(-10);
    });

    test("chooseSkills", () => {
      const android = new Android("Android");
      const currentSkills: Skill[] = [];
      random_default.choice.mockReturnValueOnce(ExpertSkill).mockReturnValueOnce(ExpertSkill.skills[0]);
      android.chooseSkills(currentSkills);
      expect(currentSkills).toContain(TrainedSkill.LINGUISTICS);
      expect(currentSkills).toContain(TrainedSkill.COMPUTERS);
      expect(currentSkills).toContain(TrainedSkill.MATHEMATICS);
      expect(currentSkills).toContain(ExpertSkill.skills[0]);
    });
  });

  describe("Scientist", () => {
    test("applyStatChanges", () => {
      const scientist = new Scientist("Scientist");
      random_default.choice.mockReturnValueOnce("strength");
      scientist.applyStatChanges(character);
      expect(character.stats.intellect).toBe(10);
      expect(character.saves.sanity).toBe(30);
      expect(character.stats.strength).toBe(5);
    });

    test("chooseSkills", () => {
      const scientist = new Scientist("Scientist");
      const currentSkills: Skill[] = [];
      random_default.choice
        .mockReturnValueOnce(MasterSkill.skills[0])
        .mockReturnValueOnce(MasterSkill.skills[0].dependsOn[0])
        .mockReturnValueOnce(MasterSkill.skills[0].dependsOn[0].dependsOn[0])
        .mockReturnValueOnce(TrainedSkill.skills[0]);
      scientist.chooseSkills(currentSkills);
      expect(currentSkills).toContain(MasterSkill.skills[0]);
      expect(currentSkills).toContain(MasterSkill.skills[0].dependsOn[0]);
      expect(currentSkills).toContain(MasterSkill.skills[0].dependsOn[0].dependsOn[0]);
      expect(currentSkills).toContain(TrainedSkill.skills[0]);
    });
  });

  describe("Teamster", () => {
    test("applyStatChanges", () => {
      const teamster = new Teamster("Teamster");
      teamster.applyStatChanges(character);
      for (const stat of Object.keys(character.stats)) {
        expect(character.stats[stat]).toBe(5);
      }
      for (const save of Object.keys(character.saves)) {
        expect(character.saves[save]).toBe(10);
      }
    });

    test("chooseSkills", () => {
      const teamster = new Teamster("Teamster");
      const currentSkills: Skill[] = [];
      random_default.choice
        .mockReturnValueOnce(ExpertSkill.skills[0])
        .mockReturnValueOnce(ExpertSkill.skills[0].dependsOn[0]);
      teamster.chooseSkills(currentSkills);
      expect(currentSkills).toContain(TrainedSkill.INDUSTRIALEQUIPMENT);
      expect(currentSkills).toContain(TrainedSkill.ZEROG);
      expect(currentSkills).toContain(ExpertSkill.skills[0]);
      expect(currentSkills).toContain(ExpertSkill.skills[0].dependsOn[0]);
    });
  });
});
