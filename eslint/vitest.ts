import { defineConfig } from "eslint/config";
import vitestPlugin from "@vitest/eslint-plugin";

// ESLint config for Vitest test files: the plugin's recommended rules plus its
// globals (describe/it/expect/vi/...), scoped to test files so it never
// applies to application source.
export const vitestConfig = defineConfig([
  {
    ...vitestPlugin.configs.recommended,
    files: ["**/*.test.{js,jsx,ts,tsx}"],
    languageOptions: {
      ...vitestPlugin.configs.env.languageOptions,
    },
  },
]);
