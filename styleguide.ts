import type { Linter } from "eslint";
import { type Config } from "prettier";
import { getPrettierConfig } from "./prettier";

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

const loadEslintConfigs = async (options: StyleguideOptions): Promise<Linter.Config[]> => {
  const { browser, node, typescript, react, next, playwright, ignores, additionalConfigs = [] } = options;

  const configLoaders = [
    { loader: () => import("./eslint/browser").then((m) => m.browserConfig), severity: browser },
    { loader: () => import("./eslint/node").then((m) => m.nodeConfig), severity: node },
    { loader: () => import("./eslint/typescript").then((m) => m.typescriptConfig), severity: typescript },
    { loader: () => import("./eslint/react").then((m) => m.reactConfig), severity: react },
    { loader: () => import("./eslint/next").then((m) => m.nextConfig), severity: next },
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
  prettierConfig?: Config;
}

export function styleguide(options: StyleguideOptions): StyleguideResult {
  const { browser, node, typescript, react, next, playwright, prettier } = options;

  const hasEslintOptions = browser ?? node ?? typescript ?? react ?? next ?? playwright;
  const prettierConfig = prettier ? getPrettierConfig(prettier) : undefined;

  if (!hasEslintOptions) {
    // Return immediately without any ESLint imports when only prettier is used
    return { prettierConfig };
  }

  // Only load ESLint configs when actually needed
  const eslintConfig = loadEslintConfigs(options);

  return {
    eslintConfig,
    prettierConfig,
  };
}
