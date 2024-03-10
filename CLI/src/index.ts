import { addPackage } from "./utils/addPackage";
import { checkAstroTailwind, checkFramework, checkTailwind } from "./utils/checks";
import { getUserPkgManager } from "./utils/getUserPkgManager";
import { logger } from "./utils/logger";
import { renderTitle } from "./utils/renderTitle";

const main = async () => {
  renderTitle();
  const pkgManager = getUserPkgManager();
  if (pkgManager == "bun"){
    console.log("DragonMix Currently doesn't support bun, please use NPM, PNPM, or Yarn")
  } else{
    const hasTailwind = checkTailwind();
    if (checkFramework() == "ASTRO"){
      if (hasTailwind != "TRUE" && checkAstroTailwind() != "TRUE"){
        addPackage("@astrojs/tailwind")
      };
      addPackage("@dragonmix/astro@latest")
    } else {
      console.log(`DragonMix currently doesn't support frameworks other than Astrojs`)
    }
  }
}

main().catch((err) => {
  logger.error("Aborting installation...");
  if (err instanceof Error) {
    logger.error(err);
  } else {
    logger.error(
      "An unknown error has occurred. Please open an issue on github with the below:"
    );
    console.log(err);
  }
  process.exit(1);
});