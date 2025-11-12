import { type Linter } from "eslint";

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
   * Disallow default exports.
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/no-default-export": "error",

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
   * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "import/order": [
    "warn",
    {
      groups: [
        "builtin", // Node.js built-in modules
        "external", // Packages
        "internal", // Aliased modules
        "parent", // Relative parent
        "sibling", // Relative sibling
        "index", // Relative index
      ],
      "newlines-between": "never",
    },
  ],
};

/**
 * Override configuration for files that commonly require default exports
 */
export const importOverrides: Linter.Config = {
  files: ["**/*.config.{js,ts}"],
  rules: {
    "import/no-default-export": "off",
  },
};
