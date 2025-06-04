import { ActorTypeCharacter } from "./actor/character.js";

Hooks.once("init", () => {
  console.log("Stars of the City | System Initialized");

  CONFIG.Actor.documentClass = SotCActor;

  CONFIG.Actor.typeLabels = {
    character: "Character"
  };

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("stars-of-the-city", SotCActorSheet, {
    types: ["character"],
    makeDefault: true
  });
});

class SotCActor extends Actor {
  prepareData() {
    super.prepareData();
    const data = this.system;
    if (data.hp) {
      data.hp.percent = Math.floor((data.hp.value / data.hp.max) * 100);
    }
  }
}

class SotCActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["stars-of-the-city", "sheet", "actor"],
      template: "systems/stars-of-the-city/templates/actor-sheet.html",
      width: 800,
      height: 700,
      tabs: [
        { navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main" }
      ]
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
  }
}