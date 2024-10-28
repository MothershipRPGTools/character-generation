import {
  Bleeding,
  BluntForce,
  FireAndExplosives,
  GoreAndMassive,
  Gunshot,
  Wound,
  WoundAdvantage,
} from "@mothership-rpg/wounds";
import random_default from "random";
import { Item } from "./items";

export class Weapon extends Item {
  constructor(
    public readonly name: string,
    public readonly cost: number,
    public readonly range: string,
    public readonly damage: string,
    public shots: number,
    public readonly wound: Wound,
    public readonly special: string,
  ) {
    super(name, special, cost);
  }

  public static get random() {
    return random_default.choice(Weapon.weapons);
  }

  public static get weapons() {
    return [
      AMMO,
      BOARDINGAXE,
      COMBATSHOTGUN,
      CROWBAR,
      FLAMETHROWER,
      FLAREGUN,
      FOAMGUN,
      FRAGGRENADE,
      GENERALPURPOSEMACHINEGUN,
      HANDWELDER,
      LASERCUTTER,
      NAILGUN,
      PULSERIFLE,
      REVOLVER,
      RIGGINGGUN,
      SCALPEL,
      SMARTRIFLE,
      SMG,
      STUNBATON,
      TRANQPISTOL,
      UNARMED,
      VIBECHETE,
    ];
  }
}

export const AMMO = new Weapon("Ammo", 50, "N/A", "N/A", 0, new Wound(Gunshot), "Per magazine/container.");

export const BOARDINGAXE = new Weapon(
  "Boarding Axe",
  150,
  "Adjacent",
  "2d10 DMG",
  0,
  new Wound(GoreAndMassive, WoundAdvantage.Advantage),
  "",
);

export const COMBATSHOTGUN = new Weapon(
  "Combat Shotgun",
  1400,
  "Close",
  "4d10 DMG",
  4,
  new Wound(Gunshot),
  "1d10 DMG at Long Range or greater.",
);

export const CROWBAR = new Weapon(
  "Crowbar",
  25,
  "Adjacent",
  "1d5 DMG",
  0,
  new Wound(BluntForce, WoundAdvantage.Advantage),
  "Grants [+] on Strength Checks to open jammed airlocks, lift heavy objects, etc.",
);

export const FLAMETHROWER = new Weapon(
  "Flamethrower",
  4000,
  "Close",
  "2d10 DMG",
  4,
  new Wound(FireAndExplosives, WoundAdvantage.Advantage),
  "Body Save [-] or be set on fire (2d10 DMG/round).",
);

export const FLAREGUN = new Weapon(
  "Flare Gun",
  25,
  "Long",
  "1d5 DMG",
  2,
  new Wound(FireAndExplosives, WoundAdvantage.Disadvantage),
  "High intensity flare visible day and night from Long Range.",
);

export const FOAMGUN = new Weapon(
  "Foam Gun",
  500,
  "Close",
  "1 DMG",
  3,
  new Wound(BluntForce),
  "Body Save or become stuck. Strength Check [-] to escape.",
);

export const FRAGGRENADE = new Weapon(
  "Frag Grenade",
  400,
  "Close",
  "3d10 DMG",
  1,
  new Wound(FireAndExplosives),
  "On a hit, damages all Adjacent to enemy.",
);

export const GENERALPURPOSEMACHINEGUN = new Weapon(
  "General-Purpose Machine Gun",
  45000,
  "Long",
  "4d10 DMG",
  5,
  new Wound(Gunshot, WoundAdvantage.Advantage),
  "Two-handed. Heavy. Barrel can be maneuvered to fire around corners.",
);

export const HANDWELDER = new Weapon(
  "Hand Welder",
  250,
  "Adjacent",
  "1d10 DMG",
  0,
  new Wound(Bleeding),
  "Can cut through airlock doors.",
);

export const LASERCUTTER = new Weapon(
  "Laser Cutter",
  1200,
  "Long",
  "1d100 DMG",
  6,
  new Wound(Bleeding, WoundAdvantage.Advantage),
  "Two-handed. Heavy. 1 round recharge between shots.",
);

export const NAILGUN = new Weapon("Nail Gun", 150, "Close", "1d5 DMG", 32, new Wound(Bleeding), "Bleeding");

export const PULSERIFLE = new Weapon("Pulse Rifle", 24000, "Long", "3d10 DMG", 5, new Wound(Gunshot), "Gunshot");

export const REVOLVER = new Weapon("Revolver", 750, "Close", "1d10+1 DMG", 6, new Wound(Gunshot), "");

export const RIGGINGGUN = new Weapon(
  "Rigging Gun",
  350,
  "Close",
  "1d10 DMG + 2d10 DMG when removed",
  1,
  new Wound(Bleeding, WoundAdvantage.Advantage),
  "100m micro-filament. Body Save or become entangled.",
);

export const SCALPEL = new Weapon(
  "Scalpel",
  50,
  "Adjacent",
  "1d5 DMG",
  0,
  new Wound(Bleeding, WoundAdvantage.Advantage),
  "",
);

export const SMARTRIFLE = new Weapon(
  "Smart Rifle",
  5000,
  "Extreme",
  "4d10 DMG (AA)",
  3,
  new Wound(Gunshot, WoundAdvantage.Advantage),
  "[-] on Combat Check when fired at Close Range.",
);

export const SMG = new Weapon("SMG", 1000, "Long", "2d10 DMG", 5, new Wound(Gunshot), "Can be fired one-handed.");

export const STUNBATON = new Weapon(
  "Stun Baton",
  150,
  "Adjacent",
  "1d5 DMG",
  0,
  new Wound(BluntForce),
  "Body Save or stunned 1 round. When dealing a Wound, roll on BOTH the Bleeding AND Gore columns.",
);

export const TRANQPISTOL = new Weapon(
  "Tranq Pistol",
  250,
  "Close",
  "1d5 DMG",
  6,
  new Wound(BluntForce),
  "If DMG dealt: enemy must Body Save or be unconscious 1d10 rounds.",
);

export const UNARMED = new Weapon("Unarmed", 0, "Adjacent", "Str/10 DMG", 0, new Wound(BluntForce), "");

export const VIBECHETE = new Weapon("Vibechete", 1000, "Adjacent", "3d10 DMG (AA)", 0, new Wound(Bleeding), "");
