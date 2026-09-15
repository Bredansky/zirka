# zirka ⭐

> зірка — _star_ in Ukrainian

One `styleguide()` call returns your ESLint, Prettier, and TypeScript config. Every block loads lazily, so only the plugins you enable are ever imported.

---

## 📦 Install

```sh
npm i -D zirka eslint prettier typescript
```

Node ≥ 22. Peer versions: `eslint` ^10.9.1 · `prettier` ^3.5.3 · `typescript` >=5.8.3 <6.1.0.

## ⚡ Quick start

```ts
// eslint.config.ts
import { RuleSeverity, styleguide } from "zirka";

const { eslintConfig } = styleguide({
  node: RuleSeverity.Error,
  typescript: RuleSeverity.Error,
  ignores: ["dist/**", "node_modules/**"],
});

export default eslintConfig;
```

```js
// prettier.config.js
import { styleguide } from "zirka";

const { prettierConfig } = styleguide({ prettier: true });

export default prettierConfig;
```

```json
// tsconfig.json
{
  "extends": "zirka/typescript",
  "compilerOptions": { "module": "NodeNext", "moduleResolution": "NodeNext", "noEmit": true },
  "include": ["**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

`jiti` is bundled, so a TypeScript config file works with no setup.

## ⚙️ ESLint

Each block brings its own globals and rule sets, and is never imported unless you enable it:

| Block             | Globals                    | Rules                                              |
| ----------------- | -------------------------- | -------------------------------------------------- |
| `browser`         | `window`, `document`, etc. | Base JS + import + prettier + unicorn              |
| `node`            | `process`, `Buffer`, etc.  | Base JS + import + prettier + unicorn              |
| `typescript`      | —                          | `typescript-eslint` strict + stylistic, type-aware |
| `react`           | —                          | `@eslint-react`, `react-hooks`, `jsx-a11y`         |
| `next`            | —                          | `@next/eslint-plugin-next`                         |
| `playwright`      | —                          | `eslint-plugin-playwright`                         |
| `pasikaApp`       | —                          | Pasika's rules for a plain TypeScript repository   |
| `pasikaNextjsApp` | —                          | Pasika's rules for a Next.js application           |

The base rules come with every block: `@eslint/js` recommended, `eslint-plugin-eslint-comments`, `eslint-plugin-unicorn`, the hand-written best-practice / ES6 / possible-errors / stylistic / variables sets, and `eslint-plugin-prettier` with `eslint-config-prettier` disabling any stylistic rule that would fight it — so `eslint --fix` also reformats JS/TS against whatever `prettier.config` the repository resolves.

Enabling a pasika preset adds four language-scoped rule sets:

| Files                                      | Rules                     |
| ------------------------------------------ | ------------------------- |
| `src/**/*.{js,jsx,ts,tsx,mjs,mts,cjs,cts}` | `pasika/*` TS/TSX rules   |
| `src/**/*.css`                             | `pasika/*` CSS rules      |
| `**/*.md` (not `_templates/`)              | `pasika/*` Markdown rules |
| `package.json`                             | `pasika/*` JSON rules     |

`pasikaApp` is the baseline — manifest, zirka contract, docs — and carries no `src/**` block; `pasikaNextjsApp` is everything in it plus the Next.js-stack manifest requirement, the source rules, and the Tailwind stylesheet rules. The JS/TS base blocks are scoped to JS/TS files, so a CSS, Markdown, or JSON file is always linted by its own rules.

### Options

| Option              | Type                                                          | Description                                    |
| ------------------- | ------------------------------------------------------------- | ---------------------------------------------- |
| `browser`           | `RuleSeverity`                                                | Browser globals                                |
| `node`              | `RuleSeverity`                                                | Node.js globals                                |
| `typescript`        | `RuleSeverity`                                                | TypeScript-ESLint strict rules                 |
| `react`             | `RuleSeverity`                                                | React + JSX-a11y rules                         |
| `next`              | `RuleSeverity`                                                | Next.js rules                                  |
| `pasikaApp`         | `RuleSeverity`                                                | Pasika rules for a plain TypeScript repository |
| `pasikaNextjsApp`   | `RuleSeverity`                                                | Pasika rules for a Next.js application         |
| `playwright`        | `RuleSeverity \| { files: string[]; severity: RuleSeverity }` | Playwright rules and optional file scope       |
| `ignores`           | `string[]`                                                    | Glob patterns to ignore                        |
| `additionalConfigs` | `Linter.Config[]`                                             | Extra flat config entries, appended last       |
| `prettier`          | `true \| { tailwind?: boolean }`                              | Enable the Prettier config                     |

### `RuleSeverity`

| Value       | Behaviour                                        |
| ----------- | ------------------------------------------------ |
| `"error"`   | All rules set to `error`                         |
| `"warn"`    | All rules set to `warn`                          |
| `"default"` | Rules keep their recommended severity            |
| `"off"`     | Config block skipped entirely — nothing imported |

## 💅 Prettier

```js
const { prettierConfig } = styleguide({ prettier: { tailwind: true } });
```

`prettier: true` is the plain config; the `tailwind` option adds `prettier-plugin-tailwindcss`. `prettier-plugin-packagejson` is included either way.

## 🧩 TypeScript

`zirka/typescript` sets strictness only — no environment-specific settings — so you extend it and add your own `module`, `lib`, `target`. The base flags are in [`typescript/base.json`](https://github.com/Bredansky/zirka/blob/main/typescript/base.json).

## 📚 Documentation

| What                          | Where                                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| The `styleguide()` factory    | [`styleguide.ts`](https://github.com/Bredansky/zirka/blob/main/styleguide.ts)                                                  |
| One file per ESLint block     | [`eslint/`](https://github.com/Bredansky/zirka/tree/main/eslint)                                                               |
| The Prettier config           | [`prettier-config/`](https://github.com/Bredansky/zirka/tree/main/prettier-config)                                             |
| What `pasika/*` rules require | the [Pasika Adoption Guide](https://github.com/Bredansky/pasika/blob/main/docs/pasika-adoption-guide/pasika-adoption-guide.md) |

## 🐝 Sibling packages

| Package                                       | What it does                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------ |
| [vulyk](https://github.com/Bredansky/vulyk)   | Installs skills and tracked docs from pinned sources, and generates agent files      |
| [pasika](https://github.com/Bredansky/pasika) | The documentation, the rules derived from it, and the helpers                        |
| **zirka**                                     | Wires ESLint, Prettier, and TypeScript into one `styleguide()` config — this package |

## 📄 License

ISC
