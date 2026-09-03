import eslintJavascriptPlugin from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
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
    // eslint-config-prettier's rules (all "off") must come after the rule sets
    // above so they win, disabling any ESLint stylistic rule that would fight
    // prettier. The prettier plugin then runs prettier itself as a rule, so
    // `eslint --fix` also reformats — the config it reads is whatever the
    // consuming repository's own prettier.config resolves to.
    plugins: { prettier: prettierPlugin },
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
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
