import { type Linter } from "eslint";
import { noUnusedVarsConfig } from "../variables";

export const typescriptRules: Linter.RulesRecord = {
  /**
   * Require consistent usage of type exports.
   * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-exports/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/consistent-type-exports": ["warn", { fixMixedExportsWithInlineTypeSpecifier: true }],

  /**
   * Require consistent usage of type imports.
   * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-imports/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/consistent-type-imports": [
    "warn",
    {
      disallowTypeAnnotations: true,
      fixStyle: "inline-type-imports",
      prefer: "type-imports",
    },
  ],

  /**
   * Require explicit return types on functions and class methods.
   * 🚫 Not fixable - https://typescript-eslint.io/rules/explicit-function-return-type/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true }],

  /**
   * Require using function property types in method signatures.
   * 🔧 Fixable - https://typescript-eslint.io/rules/method-signature-style/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/method-signature-style": "warn",

  /**
   * Require consistent naming conventions.
   * 🚫 Not fixable - https://typescript-eslint.io/rules/naming-convention/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/naming-convention": [
    "error",
    {
      format: ["PascalCase"],
      selector: ["typeLike", "enumMember"],
    },
    {
      custom: {
        match: false,
        regex: "^I[A-Z]|^(Interface|Props|State)$",
      },
      format: ["PascalCase"],
      selector: "interface",
    },
  ],

  /**
   * Disallow members of unions and intersections that do nothing or override type information.
   * 🚫 Not fixable - https://typescript-eslint.io/rules/no-redundant-type-constituents/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/no-redundant-type-constituents": "warn",

  /**
   * Disallow unnecessary namespace qualifiers.
   * 🔧 Fixable - https://typescript-eslint.io/rules/no-unnecessary-qualifier/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/no-unnecessary-qualifier": "warn",

  /**
   * Require using `RegExp.exec()` over `String.match()` for consistency.
   * 🔧 Fixable - https://typescript-eslint.io/rules/prefer-regexp-exec/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/prefer-regexp-exec": "warn",

  /**
   * Require Array#sort calls to provide a compare function.
   * 🚫 Not fixable - https://typescript-eslint.io/rules/require-array-sort-compare/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/require-array-sort-compare": ["error", { ignoreStringArrays: true }],

  /**
   * Require exhaustive checks when using union types in switch statements.
   * 🚫 Not fixable - https://typescript-eslint.io/rules/switch-exhaustiveness-check/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/switch-exhaustiveness-check": "error",

  /**
   * Require default parameters to be last.
   * 🚫 Not fixable - https://typescript-eslint.io/rules/default-param-last/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/default-param-last": "error",

  /**
   * Disallow creation of functions within loops.
   * 🚫 Not fixable - https://typescript-eslint.io/rules/no-loop-func/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/no-loop-func": "error",

  /**
   * Disallow variable declarations from shadowing variables in outer scope.
   * 🚫 Not fixable - https://typescript-eslint.io/rules/no-shadow/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/no-shadow": "error",

  /**
   * Disallow unused variables.
   * 🚫 Not fixable - https://typescript-eslint.io/rules/no-unused-vars/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/no-unused-vars": noUnusedVarsConfig,

  /**
   * Disallow unnecessary constructors.
   * 🚫 Not fixable - https://typescript-eslint.io/rules/no-useless-constructor/
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "@typescript-eslint/no-useless-constructor": "error",

  /**
   * Enforce consistent usage of type assertions.
   * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-assertions/
   * Source: Added by bredansky → https://github.com/bredansky
   */
  "@typescript-eslint/consistent-type-assertions": [
    "error",
    {
      assertionStyle: "never",
    },
  ],
};
