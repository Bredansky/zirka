import tseslint from "typescript-eslint";
import { type Linter } from "eslint";
import { typescriptImportRules } from "./rules/typescript/import.ts";
import { typescriptRules } from "./rules/typescript/index.ts";
import { typescriptExtensionRules } from "./rules/typescript/extenstion.ts";
import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "./utils/constants.ts";

export default tseslint.config([
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    files: TYPESCRIPT_FILES,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin
    },
    rules: {
      ...typescriptRules,
      ...typescriptImportRules,
      ...typescriptExtensionRules
    }
  },
  {
    files: JAVASCRIPT_FILES,
    extends: [tseslint.configs.disableTypeChecked]
  }
  // They purposely do not seek compatibility with @types/eslint so have to manually assert to avoid extra magic lines
  // https://github.com/typescript-eslint/typescript-eslint/issues/8613
]) as Linter.Config[];
