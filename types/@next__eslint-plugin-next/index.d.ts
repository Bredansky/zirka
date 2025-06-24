declare module "@next/eslint-plugin-next" {
  import type { ESLint, Linter } from "eslint";

  interface NextESLintPlugin extends ESLint.Plugin {
    configs: {
      recommended: {
        rules: Linter.RulesRecord;
      };
      "core-web-vitals": {
        rules: Linter.RulesRecord;
      };
    };
  }

  const plugin: NextESLintPlugin;
  export default plugin;
}
