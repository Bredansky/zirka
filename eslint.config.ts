import { type Linter } from "eslint";
import { nodeConfig } from "./eslint/node.ts";
import { typescriptConfig } from "./eslint/typescript.ts";

const config: Linter.Config[] = [
  ...nodeConfig,
  ...typescriptConfig,
  {
    ignores: ["node_modules"],
  },
];

// eslint-disable-next-line import/no-default-export -- ESLint config requires default export
export default config;
