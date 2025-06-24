import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import { JAVASCRIPT_FILES } from "./utils/constants.ts";

const babelOptions = {
  presets: (() => {
    try {
      require.resolve("next/babel");
      return ["next/babel"];
    } catch {
      return [];
    }
  })()
};

export default defineConfig([
  {
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules
    }
  },
  {
    files: JAVASCRIPT_FILES,
    languageOptions: {
      parserOptions: {
        ...babelOptions,
        requireConfigFile: false
      }
    }
  }
]);
