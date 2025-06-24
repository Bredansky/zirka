import { type Linter } from "eslint";
import node from "./eslint/node.ts";
import typescript from "./eslint/typescript.ts";

const config: Linter.Config[] = [
  ...node,
  ...typescript,
  {
    ignores: ["**/node_modules/**"]
  }
];

export default config;
