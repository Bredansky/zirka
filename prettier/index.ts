import { type Config } from "prettier";

const config: Config = {
  endOfLine: "lf",
  tabWidth: 2,
  printWidth: 120,
  useTabs: false,
  singleQuote: false,
  plugins: ["prettier-plugin-packagejson"],
  trailingComma: "all",
};

// eslint-disable-next-line import/no-default-export -- Prettier config requires default export
export default config;
