// Can't be properly typed due to https://prettier.io/docs/configuration#typescript-configuration-files

// eslint-disable-next-line import/no-default-export -- Prettier config requires default export
export default {
  endOfLine: "lf",
  tabWidth: 2,
  printWidth: 120,
  useTabs: false,
  singleQuote: false,
  plugins: ["prettier-plugin-packagejson"],
  trailingComma: "all",
};
