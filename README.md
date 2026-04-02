# zirka ⭐

> зірка — _star_ in Ukrainian

**zirka** is a shared ESLint, Prettier, and TypeScript config. Configs are loaded lazily — only the plugins you enable are imported. `jiti` is bundled, so TypeScript config files just work.

---

## Install

```sh
npm i -D zirka eslint prettier typescript
```

---

## Usage

### ESLint — `eslint.config.ts`

```ts
import { RuleSeverity, styleguide } from "zirka";

const { eslintConfig } = styleguide({
  browser: RuleSeverity.Error,
  typescript: RuleSeverity.Error,
  react: RuleSeverity.Error,
  next: RuleSeverity.Error,
  node: RuleSeverity.Off,
  playwright: RuleSeverity.Error,
  ignores: [".next/**", "node_modules/**"],
});

export default eslintConfig;
```

### Prettier — `prettier.config.js`

```js
import { styleguide } from "zirka";

const { prettierConfig } = styleguide({
  prettier: { tailwind: true }, // or just `true`
});

export default prettierConfig;
```

### TypeScript — `tsconfig.json`

```json
{
  "extends": "zirka/typescript"
}
```

---

## Options

| Option              | Type                             | Description                     |
| ------------------- | -------------------------------- | ------------------------------- |
| `browser`           | `RuleSeverity`                   | Browser globals + base JS rules |
| `node`              | `RuleSeverity`                   | Node.js globals                 |
| `typescript`        | `RuleSeverity`                   | TypeScript-ESLint strict rules  |
| `react`             | `RuleSeverity`                   | React + JSX-a11y rules          |
| `next`              | `RuleSeverity`                   | Next.js rules                   |
| `playwright`        | `RuleSeverity`                   | Playwright test rules           |
| `ignores`           | `string[]`                       | Glob patterns to ignore         |
| `additionalConfigs` | `Linter.Config[]`                | Extra flat config entries       |
| `prettier`          | `true \| { tailwind?: boolean }` | Enable Prettier config          |

### `RuleSeverity`

| Value       | Behaviour                                  |
| ----------- | ------------------------------------------ |
| `"error"`   | All rules set to `error`                   |
| `"warn"`    | All rules set to `warn`                    |
| `"default"` | Rules use their recommended severity as-is |
| `"off"`     | Config block skipped entirely (no import)  |

---

## Requirements

- Node ≥ 22
- `eslint` ^9 · `prettier` ^3 · `typescript` ^5 (peer deps)
