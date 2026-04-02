# zirka ⭐

> зірка — _star_ in Ukrainian

Shared ESLint, Prettier, and TypeScript config. Only the plugins you enable are imported — unused configs add zero overhead. `jiti` is bundled so TypeScript config files work out of the box.

---

## Install

```sh
npm i -D zirka eslint prettier typescript
```

---

## ESLint — `eslint.config.ts`

```ts
import { RuleSeverity, styleguide } from "zirka";

const { eslintConfig } = styleguide({
  node: RuleSeverity.Error,
  typescript: RuleSeverity.Error,
  ignores: ["dist/**", "node_modules/**"],
});

export default eslintConfig;
```

Each config block is loaded lazily — if you don't enable `react`, none of its plugins are imported.

### What's included per block

| Block        | Globals                    | Rules                                              |
| ------------ | -------------------------- | -------------------------------------------------- |
| `browser`    | `window`, `document`, etc. | Base JS + import + prettier + unicorn              |
| `node`       | `process`, `Buffer`, etc.  | Base JS + import + prettier + unicorn              |
| `typescript` | —                          | `typescript-eslint` strict + stylistic, type-aware |
| `react`      | —                          | `@eslint-react`, `react-hooks`, `jsx-a11y`         |
| `next`       | —                          | `@next/eslint-plugin-next`                         |
| `playwright` | —                          | `eslint-plugin-playwright`                         |

Base rules (always included with any block): `@eslint/js` recommended, `eslint-plugin-import`, `eslint-plugin-prettier`, `eslint-plugin-unicorn`, `eslint-comments`.

### `RuleSeverity`

| Value       | Behaviour                                        |
| ----------- | ------------------------------------------------ |
| `"error"`   | All rules set to `error`                         |
| `"warn"`    | All rules set to `warn`                          |
| `"default"` | Rules use their recommended severity as-is       |
| `"off"`     | Config block skipped entirely — nothing imported |

### Options

| Option              | Type                             | Description                             |
| ------------------- | -------------------------------- | --------------------------------------- |
| `browser`           | `RuleSeverity`                   | Browser globals                         |
| `node`              | `RuleSeverity`                   | Node.js globals                         |
| `typescript`        | `RuleSeverity`                   | TypeScript-ESLint strict rules          |
| `react`             | `RuleSeverity`                   | React + JSX-a11y rules                  |
| `next`              | `RuleSeverity`                   | Next.js rules                           |
| `playwright`        | `RuleSeverity`                   | Playwright test rules                   |
| `ignores`           | `string[]`                       | Glob patterns to ignore                 |
| `additionalConfigs` | `Linter.Config[]`                | Extra flat config entries appended last |
| `prettier`          | `true \| { tailwind?: boolean }` | Enable Prettier config                  |

---

## Prettier — `prettier.config.js`

```js
import { styleguide } from "zirka";

const { prettierConfig } = styleguide({
  prettier: true,
});

export default prettierConfig;
```

With Tailwind class sorting:

```js
const { prettierConfig } = styleguide({
  prettier: { tailwind: true },
});
```

Includes `prettier-plugin-packagejson` by default.

---

## TypeScript — `tsconfig.json`

```json
{
  "extends": "zirka/typescript"
}
```

The base config only sets strictness flags — no environment-specific settings. Add your own `module`, `lib`, `target`, etc. on top:

```json
{
  "extends": "zirka/typescript",
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "noEmit": true
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

### What's in the base

```json
{
  "strict": true,
  "esModuleInterop": true,
  "skipLibCheck": true,
  "forceConsistentCasingInFileNames": true,
  "noFallthroughCasesInSwitch": true,
  "noUncheckedIndexedAccess": true,
  "resolveJsonModule": true
}
```

---

## Requirements

- Node ≥ 22
- `eslint` ^9 · `prettier` ^3 · `typescript` ^5 (peer deps)
