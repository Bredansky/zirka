import type { Options } from "prettier";

export interface PrettierOptions {
  tailwind?: boolean;
}

/** Base Prettier config */
export const basePrettierConfig: Options = {
  endOfLine: "lf",
  tabWidth: 2,
  printWidth: 120,
  useTabs: false,
  singleQuote: false,
  trailingComma: "all",
  plugins: ["prettier-plugin-packagejson"],
};

/**
 * Returns a Prettier config based on the options.
 * `options` can be `true` (return base config) or an object with options
 */
export function getPrettierConfig(options: true | PrettierOptions): Options {
  if (options === true) {
    return basePrettierConfig;
  }

  return {
    ...basePrettierConfig,
    plugins: [...(basePrettierConfig.plugins ?? []), ...(options.tailwind ? ["prettier-plugin-tailwindcss"] : [])],
  };
}
