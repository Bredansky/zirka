import { defineConfig } from "eslint/config";
import playwrightPlugin from "eslint-plugin-playwright";

export const playwrightConfig = defineConfig([
  {
    ...playwrightPlugin.configs["flat/recommended"],
    // Playwright's own convention is *.spec.*; *.test.* is Vitest/Jest's, so
    // it is deliberately excluded here to avoid double-linting the same file
    // with two test frameworks' rule sets when both blocks are enabled.
    files: ["**/*.spec.{js,ts}", "**/tests/**/*.{js,ts}", "**/e2e/**/*.{js,ts}"],
    rules: {
      ...playwrightPlugin.configs["flat/recommended"].rules,
    },
  },
]);
