import { defineConfig } from "eslint/config";
import react from "@eslint-react/eslint-plugin";
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
]);
