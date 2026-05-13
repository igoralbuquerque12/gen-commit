import { GeneratePlanJsonUseCase } from "#application/use-cases/generate-plan-json.uc";
import { AiProviderFactory } from "#providers/ai/ai.factory";
import { getConfigPath, readJson } from "#shared/filesystem";
import logger from "#shared/logger";

export async function run(fileDestination) {
  try {
    const config = await readJson(getConfigPath());
    if (config?.disableWarns) {
      logger.setDisableWarns(true);
    }

    if (!config) {
      throw new Error("Config file not found: vibe-git.config.json");
    }

    const aiProvider = AiProviderFactory.create(config);
    const useCase = new GeneratePlanJsonUseCase(aiProvider);

    await useCase.execute({ fileDestination });
  } catch (error) {
    logger.error(`Failed to run vibe-git: ${error.message}`);
  }
}
