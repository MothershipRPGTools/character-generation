# @mothership-rpg/char-gen-lib

![](https://badgers.space/npm/name/@mothership-rpg/char-gen-lib)
![](https://badgers.space/github/release/MothershipRPGTools/character-generation-ts)
![](https://badgers.space/github/license/MothershipRPGTools/character-generation-ts)
![](https://badgers.space/codeberg/stars/MothershipRPGTools/character-generation-ts)


# Character generation

```bash
❯ npm install @mothership-rpg/char-gen-lib
```

```typescript
import { Character } from "@mothership-rpg/char-gen-lib";

const character = new Character();
console.log(character);
```

Output:

```typescript
Character {
  maxWounds: 2,
  skills: [
    TrainedSkill { name: 'Industrial Equipment', dependsOn: undefined },
    TrainedSkill { name: 'Zero-G', dependsOn: undefined },
    ExpertSkill { name: 'Pathology', dependsOn: [Array] },
    TrainedSkill { name: 'Botany', dependsOn: undefined }
  ],
  classType: Teamster {
    TRAUMA_RESPONSE: 'Once per session, you may take advantage on a panic check.'
  },
  saves: { sanity: 30, fear: 38, body: 23 },
  stats: { strength: 49, speed: 34, intellect: 50, combat: 38 },
  name: 'Jill Robel'
}
```
