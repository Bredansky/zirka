declare module "eslint-plugin-import" {
  import type { Linter } from "eslint";

  const flatConfigs: {
    recommended: Linter.Config;
  };
}
