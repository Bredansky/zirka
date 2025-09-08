import { type Linter } from "eslint";

export const es6Rules: Linter.RulesRecord = {
  /**
   * Disallow useless computed property keys.
   * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-computed-key
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-useless-computed-key": "warn",

  /**
   * Disallow renaming import, export, and destructured assignments to the same name.
   * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-rename
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-useless-rename": "warn",

  /**
   * Require `let` or `const` instead of `var`.
   * 🔧 Fixable - https://eslint.org/docs/rules/no-var
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-var": "error",

  /**
   * Require object literal shorthand syntax.
   * 🔧 Fixable - https://eslint.org/docs/rules/object-shorthand
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "object-shorthand": "warn",

  /**
   * Require default to `const` instead of `let`.
   * 🔧 Fixable - https://eslint.org/docs/rules/prefer-const
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "prefer-const": "warn",

  /**
   * Disallow parseInt() in favor of binary, octal, and hexadecimal literals.
   * 🔧 Fixable - https://eslint.org/docs/rules/prefer-numeric-literals
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "prefer-numeric-literals": "error",

  /**
   * Require using rest parameters instead of `arguments`.
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-rest-params
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "prefer-rest-params": "error",

  /**
   * Require using spread syntax instead of `.apply()`.
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-spread
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "prefer-spread": "error",

  /**
   * Require using template literals instead of string concatenation.
   * 🔧 Fixable - https://eslint.org/docs/rules/prefer-template
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "prefer-template": "warn",

  /**
   * Require a `Symbol` description.
   * 🚫 Not fixable - https://eslint.org/docs/rules/symbol-description
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "symbol-description": "error",
};
