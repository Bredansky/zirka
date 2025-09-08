import { type Linter } from "eslint";

export const possibleErrorsRules: Linter.RulesRecord = {
  /**
   * Disallow the use of console.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-console
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-console": "error",

  /**
   * Disallow expressions where the operation doesn't affect the value.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-constant-binary-expression
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-constant-binary-expression": "error",

  /**
   * Disallow returning values from Promise executor functions.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-promise-executor-return
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-promise-executor-return": "error",

  /**
   * Disallow template literal placeholder syntax in regular strings, as
   * these are likely errors.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-template-curly-in-string
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-template-curly-in-string": "error",

  /**
   * Disallow loops with a body that allows only one iteration.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-unreachable-loop
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-unreachable-loop": "error",
};
