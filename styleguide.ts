import type { Linter } from "eslint";
import type { Options } from "prettier";
import { getPrettierConfig } from "./prettier-config";

export enum RuleSeverity {
  Off = "off",
  Warn = "warn",
  Error = "error",
  Default = "default",
}

interface PrettierOptions {
  tailwind?: boolean;
}

export interface StyleguideOptions {
  browser?: RuleSeverity;
  node?: RuleSeverity;
  typescript?: RuleSeverity;
  react?: RuleSeverity;
  next?: RuleSeverity;
  pasika?: RuleSeverity;
  playwright?: RuleSeverity;
  ignores?: string[];
  additionalConfigs?: Linter.Config[];
  prettier?: PrettierOptions | true;
}

const applySeverity = async (config: Linter.Config[], severity?: RuleSeverity): Promise<Linter.Config[]> => {
  if (!severity || severity === RuleSeverity.Off) return [];
  if (severity === RuleSeverity.Default) return config;
  const { transformSeverity } = await import("./eslint/utils/transform-severity");
  return transformSeverity(config, severity);
};

/** Load pasika TS/TSX, CSS, and JSON configs for consumers. */
const loadPasikaConfigs = async (): Promise<Linter.Config[]> => {
  const [pasika, cssMod, jsonMod, markdownMod] = await Promise.all([
    import("pasika/eslint"),
    import("@eslint/css"),
    import("@eslint/json"),
    import("@eslint/markdown"),
  ]);

  const cssPlugin = cssMod.default;
  const jsonPlugin = jsonMod.default;
  const markdownPlugin = markdownMod.default;
  const pasikaJsTs = { rules: pasika.pasikaRules };
  const pasikaCss = { rules: pasika.cssRules };
  const pasikaJson = { rules: pasika.jsonRules };

  return [
    { ignores: ["**/*.css", "package.json", "**/*.md"] },
    {
      files: ["src/**/*.{cjs,cts,js,jsx,mjs,mts,ts,tsx}"],
      plugins: { pasika: pasikaJsTs },
      rules: Object.fromEntries(Object.keys(pasika.pasikaRules).map((name) => [`pasika/${name}`, "error"])),
    },
    {
      files: ["src/**/globals.css"],
      plugins: { css: cssPlugin, pasika: pasikaCss },
      language: "css/css",
      languageOptions: { tolerant: true },
      rules: Object.fromEntries(
        Object.keys(pasika.cssRules)
          .filter((name) => name !== "global-css-location")
          .map((name) => [`pasika/${name}`, "error"]),
      ),
    },
    {
      files: ["src/**/*.css"],
      plugins: { css: cssPlugin, pasika: pasikaCss },
      language: "css/css",
      languageOptions: { tolerant: true },
      rules: { "pasika/global-css-location": "error" },
    },
    {
      files: ["**/*.md"],
      ignores: ["**/_templates/**"],
      plugins: { markdown: markdownPlugin, pasika: { rules: pasika.mdRules } },
      language: "markdown/gfm",
      rules: Object.fromEntries(Object.keys(pasika.mdRules).map((name) => [`pasika/${name}`, "error"])),
    },
    {
      files: ["package.json"],
      plugins: {
        json: { languages: { json: jsonPlugin.languages.json } },
        pasika: pasikaJson,
      },
      language: "json/json",
      rules: Object.fromEntries(Object.keys(pasika.jsonRules).map((name) => [`pasika/${name}`, "error"])),
    },
  ];
};

const loadEslintConfigs = async (options: StyleguideOptions): Promise<Linter.Config[]> => {
  const { browser, node, typescript, react, next, pasika, playwright, ignores, additionalConfigs = [] } = options;

  const configLoaders = [
    { loader: () => import("./eslint/browser").then((m) => m.browserConfig), severity: browser },
    { loader: () => import("./eslint/node").then((m) => m.nodeConfig), severity: node },
    { loader: () => import("./eslint/typescript").then((m) => m.typescriptConfig), severity: typescript },
    { loader: () => import("./eslint/react").then((m) => m.reactConfig), severity: react },
    { loader: () => import("./eslint/next").then((m) => m.nextConfig), severity: next },
    { loader: () => loadPasikaConfigs(), severity: pasika },
    { loader: () => import("./eslint/playwright").then((m) => m.playwrightConfig), severity: playwright },
  ];

  const eslintConfigs: Linter.Config[] = [];

  for (const { loader, severity } of configLoaders) {
    if (severity && severity !== RuleSeverity.Off) {
      const config = await loader();
      const processedConfig = await applySeverity(config, severity);
      eslintConfigs.push(...processedConfig);
    }
  }

  if (ignores && ignores.length > 0) {
    eslintConfigs.push({ ignores });
  }
  eslintConfigs.push(...additionalConfigs);

  return eslintConfigs;
};

interface StyleguideResult {
  eslintConfig?: Linter.Config[] | Promise<Linter.Config[]>;
  prettierConfig?: Options;
}

export function styleguide(options: StyleguideOptions): StyleguideResult {
  const { browser, node, typescript, react, next, pasika, playwright, prettier } = options;

  const hasEslintOptions = browser ?? node ?? typescript ?? react ?? next ?? pasika ?? playwright;
  const prettierConfig = prettier ? getPrettierConfig(prettier) : undefined;

  if (!hasEslintOptions) {
    return { prettierConfig };
  }

  const eslintConfig = loadEslintConfigs(options);

  return {
    eslintConfig,
    prettierConfig,
  };
}
