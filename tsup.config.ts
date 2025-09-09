import { defineConfig } from "tsup";

// eslint-disable-next-line import/no-default-export -- TSUp config requires default export
export default defineConfig({
  entry: ["styleguide.ts"], // adjust if your main TS file is elsewhere
  format: ["esm", "cjs"], // dual export
  outDir: "dist",
  clean: true, // remove old files in dist
  dts: true, // generate TypeScript declaration files
  splitting: false, // no code splitting
  minify: true,
  target: "esnext",
});
