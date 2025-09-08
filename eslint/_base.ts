import eslintJavascriptPlugin from "@eslint/js";
import * as importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import babelParser from "@babel/eslint-parser";
import { defineConfig } from "eslint/config";
import { ECMA_VERSION, JAVASCRIPT_FILES } from "./utils/constants";
import { bestPracticeRules } from "./rules/best-practice";
import { es6Rules } from "./rules/es6";
import { importRules } from "./rules/import";
import { possibleErrorsRules } from "./rules/possible-errors";
import { stylisticRules } from "./rules/stylistic";
import { commentsConfig } from "./rules/comments";
import { unicornConfig } from "./rules/unicorn";
import { variablesRules } from "./rules/variables";

export const baseConfig = defineConfig([
  // Core recommended ESLint rules
  eslintJavascriptPlugin.configs.recommended,

  // Import plugin recommendations
  importPlugin.flatConfigs.recommended,

  // Prettier formatting integration
  eslintPluginPrettierRecommended,

  // Custom and recommended rules for comments
  commentsConfig,

  // Custom and recommended rules for unicorn plugin
  unicornConfig,

  // Custom ESLint configuration for all files
  {
    rules: {
      ...bestPracticeRules,
      ...es6Rules,
      ...importRules,
      ...possibleErrorsRules,
      ...stylisticRules,
      ...variablesRules,
    },
  },

  {
    languageOptions: {
      // Enable modern JS syntax
      ecmaVersion: ECMA_VERSION,

      // Use ES modules rather than CommonJS
      sourceType: "module",
    },

    // Import-related configuration
    settings: {
      "import/resolver": {
        node: true,
      },
    },

    linterOptions: {
      // Warn if there are unnecessary `eslint-disable` comments
      reportUnusedDisableDirectives: true,
    },

    // This un-ignores dotfiles like `.eslintrc.js`, which are usually ignored by default
    ignores: ["!.*.js", "!.*"],
  },

  // Override for JavaScript files (optional but useful)
  // Applies the Babel parser for parsing newer JS syntax (e.g., decorators, top-level await)
  {
    files: JAVASCRIPT_FILES,

    languageOptions: {
      parser: babelParser, // Use Babel parser instead of ESLint's default to support modern JS features

      parserOptions: {
        // Don't require a Babel config file like `.babelrc`
        requireConfigFile: false,

        // Inline Babel options for this parser instance
        babelOptions: {
          presets: ["@babel/preset-env"], // Transpile to ES5 based on target environments
        },
      },
    },
  },
]);
