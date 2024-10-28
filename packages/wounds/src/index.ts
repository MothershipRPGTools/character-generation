import random_default from "random";

export enum BluntForce {
  "Knocked Down." = 1,
  "Winded. [-] until you catch your breath." = 2,
  "Sprained Angkle. [-] on Speed Checks." = 3,
  "Concussion. [-] on mental tasks." = 4,
  "Leg or foot broken. [-] on Speed Checks." = 5,
  "Arm or hand broken. [-] on manual tasks." = 6,
  "Snapped collarbone. [-] on Strength Checks." = 7,
  "Back broken. [-] on all rolls." = 8,
  "Skull fracture. [-] on all rolls." = 9,
  "Spine or neck broken. Death Save." = 10,
}

export enum Bleeding {
  "Drop Held Item" = 1,
  "Lots of blood. Those Close gain 1 Stress." = 2,
  "Blood in eyes. [-] until wiped clean." = 3,
  "Laceration. Bleeding +1." = 4,
  "Major cut. Bleeding +2." = 5,
  "Fingers/toes severed. Bleeding +3." = 6,
  "Hand/foot severed. Bleeding +4." = 7,
  "Limb severed. Bleeding +5." = 8,
  "Major artery cut. Bleeding +6." = 9,
  "Throat slit or heart pierced. Death Save." = 10,
}

export enum Gunshot {
  "Grazed. Knocked down." = 1,
  "Bleeding +1." = 2,
  "Broken rib." = 3,
  "Fractured extremity." = 4,
  "Internal bleeding. Bleeding +2." = 5,
  "Lodged bullet. Surgery required." = 6,
  "Gunshot wound to the neck." = 7,
  "Major blood loss. Bleeding +4." = 8,
  "Sucking chest wound. Bleeding +5." = 9,
  "Headshot. Death Save." = 10,
}

export enum FireAndExplosives {
  "Hair burnt. Gain 1d5 Stress." = 1,
  "Awesome scar. +1 Minimum Stress." = 2,
  "Singed. [-] on next action." = 3,
  "Shrapnel/large burn." = 4,
  "Extensive burns. -1d10 Strength." = 5,
  "Major Burn. -2d10 Body Save." = 6,
  "Skin grafts required. -2d10 Body Save." = 7,
  "Limb on fire. 2d10 Damage per round." = 8,
  "Body on fire. 3d10 Damage per round." = 9,
  "Engulfed in fiery explosion. Death Save." = 10,
}

export enum GoreAndMassive {
  "Vomit. [-] on next action." = 1,
  "Awesome scar. +1 Minimum Stress." = 2,
  "Digit mangled." = 3,
  "Eyes gouged out." = 4,
  "Ripped off flesh. -1d10 Strength." = 5,
  "Paralyzed waist down." = 6,
  "Limb severed. Bleeding +5." = 7,
  "Impaled. Bleeding +6." = 8,
  "Guts spooled on floor. Bleeding +7." = 9,
  "Head explodes. No Death Save. You have died." = 10,
}

export type AllWounds =
  | typeof BluntForce
  | typeof Bleeding
  | typeof Gunshot
  | typeof FireAndExplosives
  | typeof GoreAndMassive;

export enum WoundAdvantage {
  Advantage = 1,
  Disadvantage = 2,
  Neutral = 3,
}

export class Wound {
  private wound?: string;
  constructor(
    public woundType: AllWounds,
    public advOrDisadv: WoundAdvantage = WoundAdvantage.Neutral,
  ) {}
  public rollSeverity(advOrDisadv?: WoundAdvantage): string {
    let advantage = this.advOrDisadv;
    if (advOrDisadv) {
      advantage = advOrDisadv;
    }

    let severity = 0;
    switch (advantage) {
      case WoundAdvantage.Advantage: {
        const rollOne = random_default.uniformInt(1, 10)();
        const rollTwo = random_default.uniformInt(1, 10)();
        severity = Math.max(rollOne, rollTwo);
        break;
      }

      case WoundAdvantage.Disadvantage: {
        const rollOne = random_default.uniformInt(1, 10)();
        const rollTwo = random_default.uniformInt(1, 10)();
        severity = Math.min(rollOne, rollTwo);
        break;
      }

      default: {
        severity = random_default.uniformInt(1, 10)();
      }
    }

    this.wound = this.woundType[severity];
    return this.wound;
  }

  toString(): string {
    if (this.wound) {
      return this.wound;
    }

    return "None.";
  }
}
