import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import { defineConfig } from "eslint/config";

export const commentsConfig = defineConfig([
  comments.recommended,
  {
    rules: {
      /**
       * Require comments on ESlint disable directives.
       * 🚫 Not fixable - https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
       * Source: Vercel Style Guide → https://github.com/vercel/style-guide
       */
      "@eslint-community/eslint-comments/require-description": "error",
    },
  },
]);
