import { defineConfig } from "eslint/config";
import type { Linter } from "eslint";
import playwrightPlugin from "eslint-plugin-playwright";

const DEFAULT_PLAYWRIGHT_FILES = [
  "**/*.spec.{js,ts}",
  "**/*.test.{js,ts}",
  "**/tests/**/*.{js,ts}",
  "**/e2e/**/*.{js,ts}",
];

export const createPlaywrightConfig = (files = DEFAULT_PLAYWRIGHT_FILES): Linter.Config[] =>
  defineConfig([
    {
      ...playwrightPlugin.configs["flat/recommended"],
      files,
      rules: {
        ...playwrightPlugin.configs["flat/recommended"].rules,
      },
    },
  ]);
