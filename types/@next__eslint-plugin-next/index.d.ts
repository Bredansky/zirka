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
  // eslint-disable-next-line import/no-default-export -- @next/eslint-plugin-next exports plugin by default
  export default plugin;
}
