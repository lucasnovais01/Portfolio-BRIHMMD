// Ponto de entrada: agrega os módulos numerados abaixo e inicializa o site
import { PORTFOLIO_DATA } from "./1-data.js";
import { renderAll } from "./2-render.js";
import { initAnimations } from "./3-animations.js";
import { initNav } from "./4-nav.js";
import { initMedia } from "./5-media.js";
import { TUTORIAL_DATA } from "./6-data-tutorial.js";

document.addEventListener("DOMContentLoaded", () => {
  renderAll({ ...PORTFOLIO_DATA, makingOf: TUTORIAL_DATA });
  initAnimations();
  initNav();
  initMedia();
});
