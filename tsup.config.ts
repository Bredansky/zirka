import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["styleguide.ts"], // adjust if your main TS file is elsewhere
  format: ["esm", "cjs"], // dual export
  outDir: "dist",
  clean: true, // remove old files in dist
  dts: true, // generate TypeScript declaration files
  splitting: false,
  minify: false,
  target: "esnext",
  external: [
    "globals",
    "@eslint/js",
    "eslint-plugin-import",
    "eslint-plugin-prettier",
    "@babel/eslint-parser",
    "@babel/preset-env",
    "@eslint-community/eslint-plugin-eslint-comments",
    "@eslint-react/eslint-plugin",
    "@next/eslint-plugin-next",
    "eslint-plugin-jsx-a11y",
    "eslint-plugin-react-hooks",
    "eslint-plugin-unicorn",
    "eslint-plugin-playwright",
    "typescript-eslint",
    "eslint-config-prettier",
    "eslint-import-resolver-typescript",
  ],
});
