import tseslint from "typescript-eslint";
import { type Linter } from "eslint";
import { typescriptImportRules } from "./rules/typescript/import";
import { typescriptRules } from "./rules/typescript/index";
import { typescriptExtensionRules } from "./rules/typescript/extenstion";
import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "./utils/constants";

export const typescriptConfig = tseslint.config([
  // These rules enforce strong type safety and identify potential type-related issues.
  tseslint.configs.strictTypeChecked,
  // These rules focus on code style and readability specifically for TypeScript.
  tseslint.configs.stylisticTypeChecked,
  {
    // This thing is needed to allow TS to group the imports correctly
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
    // This configuration applies specifically to TypeScript files.
    files: TYPESCRIPT_FILES,
    languageOptions: {
      // Set the parser to tseslint.parser, which is the TypeScript parser for ESLint.
      parser: tseslint.parser,
      parserOptions: {
        // This allows ESLint to leverage TypeScript's language service for better understanding of the project.
        projectService: true,
      },
    },
    // Register the TypeScript ESLint plugin for use in this configuration scope.
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    // Apply custom TypeScript rules.
    rules: {
      ...typescriptRules,
      ...typescriptImportRules,
      ...typescriptExtensionRules,
    },
  },
  {
    // This effectively disables all type-checking rules for JavaScript files,
    // as type-checking is only relevant for TypeScript.
    files: JAVASCRIPT_FILES,
    extends: [tseslint.configs.disableTypeChecked],
  },
  // TSESLint purposely do not seek compatibility with @types/eslint,
  // so a manual type assertion to `Linter.Config[]` is used to avoid type errors
  // https://github.com/typescript-eslint/typescript-eslint/issues/8613
]) as Linter.Config[];
