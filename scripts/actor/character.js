export const ActorTypeCharacter = {
  type: "character",
  name: "Character",
  label: "Character",
  types: ["character"],
  groups: [],
  system: {
    hp: {
      value: 50,
      max: 50
    },
    attributes: {
      might: 2,
      instinct: 4,
      will: 3
    },
    ailments: {
      bleed: 0,
      burn: 0
    }
  }
};