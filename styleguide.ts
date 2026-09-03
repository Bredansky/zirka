import type { Linter } from "eslint";
import type { Options } from "prettier";
import { getPrettierConfig } from "./prettier-config";
import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from "./eslint/utils/constants";

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
  pasikaApp?: RuleSeverity;
  pasikaNextjsApp?: RuleSeverity;
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

const JS_TS_FILES = [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES];

/**
 * Scope JS/TS-only configs (node, browser, typescript, react, next, playwright)
 * to JS/TS files so they never leak into CSS, Markdown, or JSON files. Without
 * this scoping, the pasika language blocks below would be shadowed by a global
 * ignore, and those files would not be linted at all.
 */
const scopeToJsTs = (configs: Linter.Config[]): Linter.Config[] =>
  configs.map((config) => (config.files ? config : { files: JS_TS_FILES, ...config }));

type PasikaPreset = "pasikaApp" | "pasikaNextjsApp";

/** Load a pasika preset (`pasikaApp` or `pasikaNextjsApp`) for consumers. */
const loadPasikaConfigs = async (preset: PasikaPreset): Promise<Linter.Config[]> => {
  const pasika = await import("pasika/eslint");

  // pasika's app presets already wire every language block — TS/TSX source,
  // package.json, and docs — each with its own ESLint language. Reuse as-is.
  const app = pasika[preset];

  // pasika's source block is scoped to `src/**`; keep source-under-src effective
  // over every JS/TS file so modules outside src/ are still flagged (config
  // files are exempt in-rule). The plugin must be the same object the preset
  // blocks reference, or ESLint reports a plugin redefinition when they merge.
  const sourceUnderSrc: Linter.Config = {
    files: JS_TS_FILES,
    plugins: { pasika: pasika.pasikaPlugin },
    rules: { "pasika/source-under-src": "error" },
  };

  return [...app, sourceUnderSrc];
};

const loadEslintConfigs = async (options: StyleguideOptions): Promise<Linter.Config[]> => {
  const {
    browser,
    node,
    typescript,
    react,
    next,
    pasikaApp,
    pasikaNextjsApp,
    playwright,
    ignores,
    additionalConfigs = [],
  } = options;

  const configLoaders = [
    { loader: () => import("./eslint/browser").then((m) => m.browserConfig), severity: browser },
    { loader: () => import("./eslint/node").then((m) => m.nodeConfig), severity: node },
    { loader: () => import("./eslint/typescript").then((m) => m.typescriptConfig), severity: typescript },
    { loader: () => import("./eslint/react").then((m) => m.reactConfig), severity: react },
    { loader: () => import("./eslint/next").then((m) => m.nextConfig), severity: next },
    { loader: () => loadPasikaConfigs("pasikaApp"), severity: pasikaApp, isPasika: true },
    { loader: () => loadPasikaConfigs("pasikaNextjsApp"), severity: pasikaNextjsApp, isPasika: true },
    { loader: () => import("./eslint/playwright").then((m) => m.playwrightConfig), severity: playwright },
  ];

  const eslintConfigs: Linter.Config[] = [];

  for (const { loader, severity, isPasika } of configLoaders) {
    if (severity && severity !== RuleSeverity.Off) {
      const config = await loader();
      const scopedConfig = isPasika ? config : scopeToJsTs(config);
      const processedConfig = await applySeverity(scopedConfig, severity);
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
  const { browser, node, typescript, react, next, pasikaApp, pasikaNextjsApp, playwright, prettier } = options;

  const hasEslintOptions = browser ?? node ?? typescript ?? react ?? next ?? pasikaApp ?? pasikaNextjsApp ?? playwright;
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
