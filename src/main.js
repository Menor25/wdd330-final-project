import { loadHeaderFooter, uiEffects } from "./js/utils/utils.mjs";

async function init() {
  await loadHeaderFooter();
  uiEffects();
}

init();
