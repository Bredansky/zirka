import { type Linter } from "eslint";
import importX from "eslint-plugin-import-x";

export const importOrderRule: Linter.RuleEntry = [
  "warn",
  {
    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
    pathGroups: [{ pattern: "@/**", group: "internal", position: "after" }],
    pathGroupsExcludedImportTypes: ["builtin", "external"],
    "newlines-between": "never",
    distinctGroup: false,
    alphabetize: { order: "asc", caseInsensitive: true },
  },
];

export const importOrderConfig: Linter.Config = {
  plugins: { "import-x": importX },
  rules: { "import-x/order": importOrderRule },
};

export const importRules: Linter.RulesRecord = {
  /**
   * Disallow non-import statements appearing before import statements.
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/first": "error",

  /**
   * Require a newline after the last import/require.
   * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/newline-after-import": "warn",

  /**
   * Disallow import of modules using absolute paths.
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/no-absolute-path": "error",

  /**
   * Disallow cyclical dependencies between modules.
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/no-cycle": "error",

  /**
   * Disallow duplicate imports from the same module.
   * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
   * Source: Added by bredansky → https://github.com/bredansky
   */
  "import/no-duplicates": ["error", { "prefer-inline": true }],

  /**
   * Disallow the use of extraneous packages.
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/no-extraneous-dependencies": ["error", { includeTypes: true }],

  /**
   * Disallow mutable exports.
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/no-mutable-exports": "error",

  /**
   * Disallow importing packages through relative paths.
   * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/no-relative-packages": "warn",

  /**
   * Disallow a module from importing itself.
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/no-self-import": "error",

  /**
   * Ensures that there are no useless path segments.
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/no-useless-path-segments": ["error"],

  /**
   * Enforce a module import order convention.
   * 🔧 Fixable - https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/order": importOrderRule,
};

/**
 * Override configuration for files that commonly require default exports
 */
export const importOverrides: Linter.Config = {
  files: ["**/*.config.{cjs,cts,js,mjs,mts,ts}", "types/**/*.d.ts"],
  rules: {
    "pasika/named-exports": "off",
  },
};
