import { type Linter } from "eslint";

/**
 * These are enabled by `import/recommended`, but are better handled by
 * TypeScript and @typescript-eslint.
 */
export const typescriptImportRules: Linter.RulesRecord = {
  "import/default": ["off"],
  "import/export": ["off"],
  "import/namespace": ["off"],
  "import/no-unresolved": ["off"]
};
