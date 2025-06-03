export async function rollSkillCheck(actor) {
  const attr = actor.system.attributes?.might ?? 0;
  const roll = await new Roll(`2d10 + ${attr}`).roll({ async: true });

  roll.toMessage({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor: "Skill Check (2d10 + Might)"
  });
}