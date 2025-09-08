import { defineConfig } from "eslint/config";
import react from "@eslint-react/eslint-plugin";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "./utils/constants";

// ESLint config for React projects with TypeScript + JSX a11y + hooks best practices
export const reactConfig = defineConfig([
  {
    // Apply React recommended rules for JavaScript files
    files: JAVASCRIPT_FILES,
    extends: [react.configs.recommended],
  },
  {
    // Apply React + TypeScript recommended rules (with type-checking enabled)
    files: TYPESCRIPT_FILES,
    extends: [react.configs["recommended-type-checked"]],
  },
  {
    // Extend strict accessibility rules and latest React Hooks best practices
    extends: [
      jsxA11y.flatConfigs.strict, // Enforces strong accessibility standards
      reactHooks.configs["recommended-latest"], // Ensures proper usage of React Hooks
    ],
  },
]);
