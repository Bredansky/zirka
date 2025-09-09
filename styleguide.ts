import type { Linter } from "eslint";
import { type Config } from "prettier";
import { getPrettierConfig } from "./prettier";
import { transformSeverity } from "./eslint/utils/transform-severity";
import { browserConfig } from "./eslint/browser";
import { nextConfig } from "./eslint/next";
import { nodeConfig } from "./eslint/node";
import { reactConfig } from "./eslint/react";
import { typescriptConfig } from "./eslint/typescript";

export enum RuleSeverity {
  Off = "off",
  Warn = "warn",
  Error = "error",
  Default = "default",
}

interface PrettierOptions {
  tailwind?: boolean;
}

interface StyleguideOptions {
  browser?: RuleSeverity;
  node?: RuleSeverity;
  typescript?: RuleSeverity;
  react?: RuleSeverity;
  next?: RuleSeverity;
  ignores?: string[];
  additionalConfigs?: Linter.Config[];
  prettier?: PrettierOptions | true;
}

const applySeverity = (config: Linter.Config[], severity?: RuleSeverity): Linter.Config[] => {
  if (!severity || severity === RuleSeverity.Off) return [];
  if (severity === RuleSeverity.Default) return config;
  return transformSeverity(config, severity);
};

export function styleguide(options: StyleguideOptions): { eslintConfig?: Linter.Config[]; prettierConfig?: Config } {
  const { browser, node, typescript, react, next, ignores, additionalConfigs = [], prettier } = options;

  const eslintConfigs: Linter.Config[] = [
    { config: browserConfig, severity: browser },
    { config: nodeConfig, severity: node },
    { config: typescriptConfig, severity: typescript },
    { config: reactConfig, severity: react },
    { config: nextConfig, severity: next },
  ].flatMap(({ config, severity }) => applySeverity(config, severity));

  if (ignores && ignores.length > 0) {
    eslintConfigs.push({ ignores });
  }
  eslintConfigs.push(...additionalConfigs);

  const prettierConfig = prettier ? getPrettierConfig(prettier) : undefined;

  return {
    eslintConfig: eslintConfigs.length ? eslintConfigs : undefined,
    prettierConfig,
  };
}
