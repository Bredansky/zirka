import eslintJavascriptPlugin from "@eslint/js";
import { defineConfig } from "eslint/config";
import { ECMA_VERSION } from "./utils/constants";
import { bestPracticeRules } from "./rules/best-practice";
import { es6Rules } from "./rules/es6";
import { possibleErrorsRules } from "./rules/possible-errors";
import { stylisticRules } from "./rules/stylistic";
import { commentsConfig } from "./rules/comments";
import { unicornConfig } from "./rules/unicorn";
import { variablesRules } from "./rules/variables";

export const baseConfig = defineConfig([
  eslintJavascriptPlugin.configs.recommended,
  commentsConfig,
  unicornConfig,
  {
    rules: {
      ...bestPracticeRules,
      ...es6Rules,
      ...possibleErrorsRules,
      ...stylisticRules,
      ...variablesRules,
    },
  },
  {
    languageOptions: {
      ecmaVersion: ECMA_VERSION,
      sourceType: "module",
    },
    linterOptions: { reportUnusedDisableDirectives: true },
    ignores: ["!.*.js", "!.*"],
  },
]);
