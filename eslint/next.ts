import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import { JAVASCRIPT_FILES } from "./utils/constants";
import { nextImportRules } from "./rules/next/imports";

// Dynamically determine Babel presets for Next.js projects.
// This allows the configuration to work whether 'next/babel' is available or not,
// preventing errors if Next.js is not a direct dependency or during specific build environments.
const babelOptions = {
  presets: (() => {
    try {
      // Attempt to resolve 'next/babel'. If successful, it means Next.js's Babel preset is available.
      require.resolve("next/babel");
      return ["next/babel"];
    } catch {
      // If 'next/babel' cannot be resolved (e.g., in a non-Next.js project), return an empty array.
      return [];
    }
  })(),
};

export const nextConfig = defineConfig([
  // Applies Next.js specific rules globally.
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    // Apply recommended and core-web-vitals rules from the Next.js plugin.
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    // Target only files matching the JAVASCRIPT_FILES pattern.
    // This ensures that Babel parsing is applied only where relevant.
    files: JAVASCRIPT_FILES,
    languageOptions: {
      parserOptions: {
        // Spread the dynamically determined Babel options (presets).
        ...babelOptions,
        // Disable requireConfigFile to prevent ESLint from looking for a separate Babel configuration file.
        // This makes the configuration self-contained and relies on the presets defined above.
        requireConfigFile: false,
      },
    },
  },
  nextImportRules,
]);
