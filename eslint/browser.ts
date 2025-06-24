import { defineConfig } from "eslint/config";
import globals from "globals";
import { baseConfig } from "./_base.ts";

// This transforms the base config array by mapping over each entry and conditionally modifying it
export const browserConfig = defineConfig(
  baseConfig.map((config) => {
    // Only transform entries that define `languageOptions`
    // (Some config objects might be simple overrides without language options)
    if (!config.languageOptions) return config;

    return {
      ...config,

      // Override the `languageOptions` field
      languageOptions: {
        ...config.languageOptions,

        // Merge in the browser globals (e.g., `window`, `document`, etc.)
        globals: {
          ...(config.languageOptions.globals ?? {}),
          ...globals.browser,
        },
      },
    };
  }),
);
