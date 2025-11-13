import { defineConfig } from "eslint/config";
import playwrightPlugin from "eslint-plugin-playwright";

export const playwrightConfig = defineConfig([
  {
    ...playwrightPlugin.configs["flat/recommended"],
    files: ["**/*.spec.{js,ts}", "**/*.test.{js,ts}", "**/tests/**/*.{js,ts}", "**/e2e/**/*.{js,ts}"],
    rules: {
      ...playwrightPlugin.configs["flat/recommended"].rules,
    },
  },
]);
