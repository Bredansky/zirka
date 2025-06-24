import { defineConfig } from "eslint/config";
import globals from "globals";
import base from "./_base.js";

// This transforms the base config array by mapping over each entry and conditionally modifying it
export default defineConfig(
  base.map((config) => {
    // Only transform entries that define `languageOptions`
    // (Some config objects might be simple overrides without language options)
    if (!config.languageOptions) return config;

    return {
      ...config,

      // Override the `languageOptions` field
      languageOptions: {
        ...config.languageOptions,

        // Merge in the Node globals
        globals: {
          ...(config.languageOptions.globals ?? {}),
          ...globals.node
        }
      }
    };
  })
);
