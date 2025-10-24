import { type Linter } from "eslint";

/**
 * Next.js specific file patterns that require default exports
 */
export const NEXT_JS_FILES = [
  // Pages Router
  "**/pages/**/*.{js,jsx,ts,tsx}",
  "**/src/pages/**/*.{js,jsx,ts,tsx}",
  // App Router
  "**/app/**/page.{js,jsx,ts,tsx}",
  "**/app/**/layout.{js,jsx,ts,tsx}",
  "**/app/**/loading.{js,jsx,ts,tsx}",
  "**/app/**/error.{js,jsx,ts,tsx}",
  "**/app/**/not-found.{js,jsx,ts,tsx}",
  "**/app/**/global-error.{js,jsx,ts,tsx}",
  "**/app/**/route.{js,ts}",
  "**/src/app/**/page.{js,jsx,ts,tsx}",
  "**/src/app/**/layout.{js,jsx,ts,tsx}",
  "**/src/app/**/loading.{js,jsx,ts,tsx}",
  "**/src/app/**/error.{js,jsx,ts,tsx}",
  "**/src/app/**/not-found.{js,jsx,ts,tsx}",
  "**/src/app/**/global-error.{js,jsx,ts,tsx}",
  "**/src/app/**/route.{js,ts}",
];

/**
 * Override rules for Next.js pages and routes that require default exports
 */
export const nextImportRules: Linter.Config = {
  files: NEXT_JS_FILES,
  rules: {
    "import/no-default-export": "off",
  },
};
