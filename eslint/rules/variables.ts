import { type Linter } from "eslint";

export const noUnusedVarsConfig: Linter.RuleEntry = [
  "error",
  {
    args: "after-used",
    argsIgnorePattern: "^_",
    ignoreRestSiblings: false,
    vars: "all",
    varsIgnorePattern: "^_",
  },
];

export const variablesRules: Linter.RulesRecord = {
  /**
   * Disallow labels that share a name with a variable.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-label-var
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-label-var": "error",

  /**
   * Disallow initializing variables to `undefined`.
   * 🔧 Fixable - https://eslint.org/docs/rules/no-undef-init
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-undef-init": "warn",

  /**
   * Disallow unused variables.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-unused-vars
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-unused-vars": noUnusedVarsConfig,
};
