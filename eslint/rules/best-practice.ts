import { type Linter } from "eslint";

export const bestPracticeRules: Linter.RulesRecord = {
  /**
   * Require return statements in array methods callbacks.
   * 🚫 Not fixable - https://eslint.org/docs/rules/array-callback-return
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "array-callback-return": ["error", { allowImplicit: true }],

  /**
   * Treat `var` statements as if they were block scoped.
   * 🚫 Not fixable - https://eslint.org/docs/rules/block-scoped-var
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "block-scoped-var": "error",

  /**
   * Require curly braces for multiline blocks.
   * 🔧 Fixable - https://eslint.org/docs/rules/curly
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  curly: ["warn", "multi-line"],

  /**
   * Require default clauses in switch statements to be last (if used).
   * 🚫 Not fixable - https://eslint.org/docs/rules/default-case-last
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "default-case-last": "error",

  /**
   * Require triple equals (`===` and `!==`).
   * 🔧 Fixable - https://eslint.org/docs/rules/eqeqeq
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  eqeqeq: "error",

  /**
   * Require grouped accessor pairs in object literals and classes.
   * 🚫 Not fixable - https://eslint.org/docs/rules/grouped-accessor-pairs
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "grouped-accessor-pairs": "error",

  /**
   * Disallow use of `alert()`.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-alert
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-alert": "error",

  /**
   * Disallow use of `caller`/`callee`.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-caller
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-caller": "error",

  /**
   * Disallow returning value in constructor.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-constructor-return
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-constructor-return": "error",

  /**
   * Disallow using an `else` if the `if` block contains a return.
   * 🔧 Fixable - https://eslint.org/docs/rules/no-else-return
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-else-return": "warn",

  /**
   * Disallow `eval()`.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-eval
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-eval": "error",

  /**
   * Disallow extending native objects.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-extend-native
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-extend-native": "error",

  /**
   * Disallow unnecessary function binding.
   * 🔧 Fixable - https://eslint.org/docs/rules/no-extra-bind
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-extra-bind": "error",

  /**
   * Disallow unnecessary labels.
   * 🔧 Fixable - https://eslint.org/docs/rules/no-extra-label
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-extra-label": "error",

  /**
   * Disallow floating decimals.
   * 🔧 Fixable - https://eslint.org/docs/rules/no-floating-decimal
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-floating-decimal": "error",

  /**
   * Make people convert types explicitly e.g. `Boolean(foo)` instead of `!!foo`.
   * 🔧 Partially Fixable - https://eslint.org/docs/rules/no-implicit-coercion
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-implicit-coercion": "error",

  /**
   * Disallow use of `eval()`-like methods.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-implied-eval
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-implied-eval": "error",

  /**
   * Disallow usage of `__iterator__` property.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-iterator
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-iterator": "error",

  /**
   * Disallow use of labels for anything other than loops and switches.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-labels
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-labels": ["error"],

  /**
   * Disallow unnecessary nested blocks.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-lone-blocks
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-lone-blocks": "error",

  /**
   * Disallow `new` for side effects.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-new
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-new": "error",

  /**
   * Disallow function constructors.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-new-func
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-new-func": "error",

  /**
   * Disallow primitive wrapper instances, such as `new String('foo')`.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-new-wrappers
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-new-wrappers": "error",

  /**
   * Disallow use of octal escape sequences in string literals.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-octal-escape
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-octal-escape": "error",

  /**
   * Disallow reassignment of function parameters.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-param-reassign
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-param-reassign": "error",

  /**
   * Disallow usage of the deprecated `__proto__` property.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-proto
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-proto": "error",

  /**
   * Disallow assignment in `return` statement.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-return-assign
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-return-assign": "error",

  /**
   * Disallow use of `javascript:` urls.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-script-url
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-script-url": "error",

  /**
   * Disallow comparisons where both sides are exactly the same.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-self-compare
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-self-compare": "error",

  /**
   * Disallow use of comma operator.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-sequences
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-sequences": "error",

  /**
   * Disallow unnecessary `.call()` and `.apply()`.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-useless-call
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-useless-call": "error",

  /**
   * Disallow unnecessary concatenation of strings.
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-useless-concat
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-useless-concat": "error",

  /**
   * Disallow redundant return statements.
   * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-return
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "no-useless-return": "warn",

  /**
   * Require using named capture groups in regular expressions.
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-named-capture-group
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "prefer-named-capture-group": "error",

  /**
   * Require using Error objects as Promise rejection reasons.
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-promise-reject-errors
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

  /**
   * Disallow use of the RegExp constructor in favor of regular expression literals.
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-regex-literals
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  "prefer-regex-literals": "error",

  /**
   * Disallow "Yoda conditions", ensuring the comparison.
   * 🔧 Fixable - https://eslint.org/docs/rules/yoda
   * Source: Vercel Style Guide → https://github.com/vercel/style-guide
   */
  yoda: "warn",
};
