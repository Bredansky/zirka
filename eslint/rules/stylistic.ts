import { type Linter } from "eslint";

export const stylisticRules: Linter.RulesRecord = {
  /**
   * Require camel case names.
   * 🚫 Not fixable - https://eslint.org/docs/rules/camelcase
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  camelcase: [
    "error",
    {
      allow: ["^UNSAFE_"],
      ignoreDestructuring: false,
      properties: "never",
    },
  ],

  /**
   * Require function expressions to have a name.
   * 🚫 Not fixable - https://eslint.org/docs/rules/func-names
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "func-names": ["error", "as-needed"],

  /**
   * Require a capital letter for constructors.
   * 🚫 Not fixable - https://eslint.org/docs/rules/new-cap
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "new-cap": ["error", { capIsNew: false }],

  /**
   * Disallow the omission of parentheses when invoking a constructor with
   * no arguments.
   * 🔧 Fixable - https://eslint.org/docs/rules/new-parens
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "new-parens": "warn",

  /**
   * Disallow use of the Array constructor.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-array-constructor
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-array-constructor": "error",

  /**
   * Disallow use of bitwise operators.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-bitwise
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-bitwise": "error",

  /**
   * Disallow if as the only statement in an else block.
   * 🔧 Fixable - https://eslint.org/docs/rules/no-lonely-if
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-lonely-if": "warn",

  /**
   * Disallow use of chained assignment expressions.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-multi-assign
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-multi-assign": ["error"],

  /**
   * Disallow nested ternary expressions.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-nested-ternary
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-nested-ternary": "error",

  /**
   * Disallow ternary operators when simpler alternatives exist.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-unneeded-ternary
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-unneeded-ternary": "error",

  /**
   * Require use of an object spread over Object.assign.
   * 🔧 Fixable - https://eslint.org/docs/rules/prefer-object-spread
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "prefer-object-spread": "warn",
};
