import type { Linter } from "eslint";
import { transformSeverity } from "./utils/transform-severity";
import { browserConfig } from "./browser";
import { nextConfig } from "./next";
import { nodeConfig } from "./node";
import { reactConfig } from "./react";
import { typescriptConfig } from "./typescript";

export enum RuleSeverity {
  Off = "off",
  Warn = "warn",
  Error = "error",
  Default = "default",
}

interface StyleguideOptions {
  browser?: RuleSeverity;
  node?: RuleSeverity;
  typescript?: RuleSeverity;
  react?: RuleSeverity;
  next?: RuleSeverity;
  ignores?: string[];
  additionalConfigs?: Linter.Config[];
}

const applySeverity = (config: Linter.Config[], optionSeverity?: RuleSeverity): Linter.Config[] => {
  if (optionSeverity === undefined || optionSeverity === RuleSeverity.Off) {
    return [];
  }
  if (optionSeverity === RuleSeverity.Default) {
    return config;
  }
  return transformSeverity(config, optionSeverity);
};

export function styleguide(configOptions: StyleguideOptions): Linter.Config[] {
  const { browser, node, typescript, react, next, ignores, additionalConfigs = [] } = configOptions;

  if ((!browser || browser === RuleSeverity.Off) && (!node || node === RuleSeverity.Off)) {
    throw new Error(
      "WebX Styleguide: Either 'browser' or 'node' configuration must be enabled in your styleguide options (e.g., 'default', 'warn', 'error').",
    );
  }

  const configs: Linter.Config[] = [
    { config: browserConfig, severity: browser },
    { config: nodeConfig, severity: node },
    { config: typescriptConfig, severity: typescript },
    { config: reactConfig, severity: react },
    { config: nextConfig, severity: next },
  ].flatMap(({ config, severity }) => applySeverity(config, severity));

  if (ignores && ignores.length > 0) {
    configs.push({ ignores });
  }

  configs.push(...additionalConfigs);

  return configs;
}
