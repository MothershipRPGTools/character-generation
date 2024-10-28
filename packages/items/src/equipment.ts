import random_default from "random";
import { Item } from "./items";

export class Equipment extends Item {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly cost: number,
  ) {
    super(name, description, cost);
  }

  public static get random() {
    return random_default.choice(Equipment.equipment);
  }

  public static get equipment() {
    return [
      ASSORTEDTOOLS,
      AUTOMEDX5,
      BATTERYHIGHPOWER,
      BINOCULARS,
      BIOSCANNER,
      BODYCAM,
      CHEMLIGHTX5,
      SCANNERCYBERNETICDIAGNOSTIC,
      ELECTRONICTOOLSET,
      EMERGENCYBEACON,
      EXOLOADER,
      DETONATOREXPLOSIVES,
      FIRSTAIDKIT,
      FLASHLIGHT,
      FOLDABLESTRETCHER,
      GEIGERCOUNTER,
      HUDHEADSUPDISPLAY,
      INFRAREDGOGGLES,
      JETPACK,
      LOCKPICKSET,
      LONGRANGECOMMS,
      MAGBOOTS,
      MEDSCANNER,
      MOHABUNIT,
      MREX7,
      MYLARBLANKET,
      OXYGENTANK,
      PARACORD50M,
      PATCHKITX3,
      PERSONALLOCATOR,
      PETORGANIC,
      PETSYNTHETIC,
      TERMINALPORTABLECOMPUTER,
      RADIATIONPILLSX5,
      RADIOJAMMER,
      REBREATHER,
      RUCKSACK,
      SALVAGEDRONE,
      SAMPLECOLLECTIONKIT,
      SHORTRANGECOMMS,
      SMARTLINKADDON,
      STIMPAK,
      WATERFILTRATIONDEVICE,
    ];
  }
}

export const ASSORTEDTOOLS = new Equipment(
  "Assorted Tools",
  "Wrenches, spanners, screwdrivers, etc. Can be used as weapons in a pinch (1d5 DMG).",
  20,
);
export const AUTOMEDX5 = new Equipment(
  "Automed (x5)",
  "Nanotech pills that assist your body in repairing Damage by granting Advantage to Body Saves meant to repel disease and poison, as well as attempts to heal from rest.",
  1.5,
);
export const BATTERYHIGHPOWER = new Equipment(
  "Battery (High Power)",
  "Heavy duty battery used for powering laser cutters, salvage drones, and other items. Can be recharged in 1 hour if connected to power or in 6 hours with solar power. Add waterproofing (+500cr).",
  500,
);
export const BINOCULARS = new Equipment(
  "Binoculars",
  "20x magnification. Add night vision (+300cr) or thermal vision (+1kcr).",
  150,
);
export const BIOSCANNER = new Equipment(
  "Bioscanner",
  "Long Range. Allows the user to scan for signs of life. Can tell the location of signs of life, but not what that life is. Blocked by some materials at the Warden’s discretion.",
  3000,
);
export const BODYCAM = new Equipment(
  "Body Cam",
  "A camera worn on your clothing that can stream video back to a control center so your other crewmembers can see what you’re seeing. Add night vision (+300cr) or thermal vision (+1kcr).",
  50,
);
export const CHEMLIGHTX5 = new Equipment(
  "Chemlight (x5)",
  "Small disposable glowsticks capable of dim illumination in a 1m radius.",
  5,
);
export const SCANNERCYBERNETICDIAGNOSTIC = new Equipment(
  "Scanner Cybernetic Diagnostic",
  "Allows the user to scan androids and other cybernetic organisms in order to diagnose any physical or mental issues they may be having. Often distrusted by androids.",
  2000,
);
export const ELECTRONICTOOLSET = new Equipment(
  "Electronic Tool Set",
  "A full set of tools for doing detailed repair or construction work on electronics.",
  100,
);
export const EMERGENCYBEACON = new Equipment(
  "Emergency Beacon",
  "A small device that sends up a flare and then emits a loud beep every few seconds. Additionally, sends out a call on all radio channels to ships or vehicles in the area, but can be blocked by a radio jammer.",
  2000,
);
export const EXOLOADER = new Equipment(
  "Exoloader",
  "Open-air mechanical exoskeleton used for heavy lifting (up to 5000kg). Loader claws deal 1 Wound. User can only wear Standard Crew Attire or Standard Battle Dress while operating. Battery operated (48 hours of use).",
  100000,
);
export const DETONATOREXPLOSIVES = new Equipment(
  "Detonator Explosives &",
  "Explosive charge powerful enough to blow open an airlock. All organisms in Close Range must make a Body Save or take a Wound (Explosive). Detonator works at Long Range, but can be blocked by a radio jammer.",
  500,
);
export const FIRSTAIDKIT = new Equipment(
  "First Aid Kit",
  "An assortment of dressings and treatments to help stop bleeding, bandage cuts, and treat other minor injuries.",
  75,
);
export const FLASHLIGHT = new Equipment(
  "Flashlight",
  "Handheld or shoulder mounted. Illuminates 10m ahead of the user.",
  30,
);
export const FOLDABLESTRETCHER = new Equipment(
  "Foldable Stretcher",
  "Portable stretcher that can fit within a rucksack. Allows the user to safely strap down the patient and carry them to a location where their wounds can be better treated. Unfolds to roughly 2m.",
  150,
);
export const GEIGERCOUNTER = new Equipment("Geiger Counter", "Detects radiation and displays radiation levels.", 20);
export const HUDHEADSUPDISPLAY = new Equipment(
  "(HUD) Heads-Up Display",
  "Often worn by marines, the HUD allows the wearer to see through the body cams of others in their unit, and connect to any smart-link upgraded weapon.",
  100,
);
export const INFRAREDGOGGLES = new Equipment(
  "Infrared Goggles",
  "Allows the wearer to see heat signatures, sometimes up to several hours old. Add night vision (+300cr).",
  1.5,
);
export const JETPACK = new Equipment(
  "Jetpack",
  "Allows wearer to fly up to 100m high and up to a speed of 100km/hr for 2 hours on a tank of fuel. Deals 1d100[+] DMG if destroyed. Fuel can be refilled for 200cr.",
  75000,
);
export const LOCKPICKSET = new Equipment(
  "Lockpick Set",
  "A highly advanced set of tools meant for hacking basic airlock and electronic door systems.",
  40,
);
export const LONGRANGECOMMS = new Equipment(
  "Long-range Comms",
  "Rucksack-sized communication device for use in surface-to-ship communication.",
  1000,
);
export const MAGBOOTS = new Equipment(
  "Mag-boots",
  "Grants a magnetic grip to the wearer, allowing them to easily walk on the exterior of a ship (in space, while docked, or free-floating), metal-based asteroids, or any other magnetic surface.",
  350,
);
export const MEDSCANNER = new Equipment(
  "Medscanner",
  "Allows the user to scan a living or dead body to analyze it for disease or abnormalities, without having to do a biopsy or autopsy. Results may not be instantaneous and may require a lab for complete analysis.",
  8000,
);
export const MOHABUNIT = new Equipment(
  "MoHab Unit",
  "Tent, canteen, stove, rucksack, compass, and sleeping bag.",
  1000,
);
export const MREX7 = new Equipment(
  "MRE (x7)",
  "“Meal, Ready-to-Eat.” Self-contained, individual field rations in lightweight packaging. Each has sufficient sustenance for a single person for one day (does not include water).",
  70,
);
export const MYLARBLANKET = new Equipment(
  "Mylar Blanket",
  "Lightweight blanket made of heat-reflective material. Often used for thermal regulation of patients suffering from extreme cold or other trauma",
  10,
);
export const OXYGENTANK = new Equipment(
  "Oxygen Tank",
  "When attached to a vaccsuit provides up to 12 hours of oxygen under normal circumstances, 4 hours under stressful circumstances. Explosive.",
  50,
);
export const PARACORD50M = new Equipment("Paracord (50m)", "General purpose lightweight nylon rope.", 10);
export const PATCHKITX3 = new Equipment(
  "Patch Kit (x3)",
  "Repairs punctured and torn vaccsuits, restoring their space readiness. Patched vaccsuits have an AP of 1.",
  200,
);
export const PERSONALLOCATOR = new Equipment(
  "Personal Locator",
  "Allows crewmembers at a control center (or on the bridge of a ship) to track the location of the wearer.",
  200,
);
export const PETORGANIC = new Equipment(
  "Pet (Organic)",
  "Small to medium-sized organic pet animal. Larger or rare pets cost 2d10x base pet cost.",
  200000,
);
export const PETSYNTHETIC = new Equipment(
  "Pet (Synthetic)",
  "Small to medium-sized synthetic pet animal. Larger or rare pets cost 2d10x base pet cost.",
  15000,
);
export const TERMINALPORTABLECOMPUTER = new Equipment(
  "Terminal Portable Computer",
  "Flat computer monitor, keyboard and interface which allows the user to hack into pre-existing computers and networks, as well as perform standard computer tasks.",
  1.5,
);
export const RADIATIONPILLSX5 = new Equipment(
  "Radiation Pills (x5)",
  "Take 1d5 DMG and reduce your Radiation Level (see pg. 33.2) by 1 for 2d10 minutes.",
  200,
);
export const RADIOJAMMER = new Equipment(
  "Radio Jammer",
  "Rucksack-sized device which, when activated, renders all radio signals within 100km incomprehensible.",
  4000,
);
export const REBREATHER = new Equipment(
  "Rebreather",
  "When worn, filters toxic air and/or allows for underwater breathing for up to 20 minutes at a time without resurfacing. Can be connected to an oxygen tank.",
  500,
);
export const RUCKSACK = new Equipment("Rucksack", "Large, durable, waterproof backpack.", 50);
export const SALVAGEDRONE = new Equipment(
  "Salvage Drone",
  "Battery operated remote controlled drone. Requires two hands to operate receiver. Can fly up to 450m high, to a distance of 3km from operator. Can run for 2 hours. Can record and transmit footage to receiver. If purchased separately, can be equipped with up to two of the following: binoculars, radio jammer, Geiger counter, laser cutter, medscanner, personal locator, infrared goggles, emergency beacon, cybernetic diagnostic scanner, bioscanner. Can carry up to 20-30kg.",
  10000,
);
export const SAMPLECOLLECTIONKIT = new Equipment(
  "Sample Collection Kit",
  "Used to research xenoflora and xenofauna in the field. Can take vital signs, DNA samples ,and collect other data on foreign material. Results may not be instantaneous and may require a lab for complete analysis.",
  50,
);
export const SHORTRANGECOMMS = new Equipment(
  "Short-range Comms",
  "Allows communication from ship-to-ship within a reasonable distance, as well as surface-to-surface within a dozen kilometers. Blocked by radio jammer.",
  100,
);
export const SMARTLINKADDON = new Equipment(
  "Smart-link Add-On",
  "Grants remote viewing, recording, and operation of a ranged weapon as well as +5 DMG to the weapon.",
  10000,
);
export const STIMPAK = new Equipment(
  "Stimpak",
  "Cures cryosickness, reduces Stress by 1, restores 1d10 Health, and grants [+] to all rolls for 1d10 min. Roll 1d10. If you roll under the amount of doses you’ve taken in the past 24 hours, make a Death Save.",
  1000,
);
export const WATERFILTRATIONDEVICE = new Equipment(
  "Water Filtration Device",
  "Can pump 4 liters of filtered water per hour from even the most brackish swamps.",
  50,
);
