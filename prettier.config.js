import { createJiti } from "jiti";

// Loads the TypeScript source directly instead of the built dist/ output, so
// this file never depends on a prior `npm run build` — jiti transpiles
// styleguide.ts (and everything it imports) on demand.
const jiti = createJiti(import.meta.url);
const { styleguide } = await jiti.import("./styleguide.ts");

export default styleguide({ prettier: true }).prettierConfig;
