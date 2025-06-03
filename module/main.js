import { SotCActor } from "./actor/actor.js";
import { SotCActorSheet } from "./actor/actor-sheet.js";

Hooks.once("init", () => {
  console.log("Stars of the City | Initializing system...");

  CONFIG.Actor.documentClass = SotCActor;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("stars-of-the-city", SotCActorSheet, {
    types: ["character"],
    makeDefault: true
  });
});