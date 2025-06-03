import { rollSkillCheck } from "../dice/rolls.js";

export class SotCActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["stars-of-the-city", "sheet", "actor"],
      template: "systems/stars-of-the-city/templates/actor/actor-sheet.html",
      width: 800,
      height: 700,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main" }]
    });
  }

  getData() {
    return super.getData();
  }

  activateListeners(html) {
    super.activateListeners(html);

    html.find(".heal-button").click(() => {
      const actor = this.actor;
      const current = actor.system.hp.value;
      const max = actor.system.hp.max;
      actor.update({ "system.hp.value": Math.min(max, current + 10) });
    });

    html.find(".roll-skill").on("click", () => {
      rollSkillCheck(this.actor);
    });
  }
}
