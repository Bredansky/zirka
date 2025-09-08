import { type Linter } from "eslint";
import { RuleSeverity } from "../index";

enum RuleSeverityNum {
  Off = 0,
  Warn = 1,
  Error = 2,
}

export function transformSeverity(
  configsToProcess: Linter.Config[],
  targetSeverity: RuleSeverity.Warn | RuleSeverity.Error,
): Linter.Config[] {
  const transformedConfigs: Linter.Config[] = [];

  for (const singleConfig of configsToProcess) {
    const newConfig = { ...singleConfig };

    if (newConfig.rules) {
      const newRules: Linter.RulesRecord = {};

      for (const ruleId in newConfig.rules) {
        const ruleConfig = newConfig.rules[ruleId];

        if (!ruleConfig) {
          continue;
        }

        const [currentSeverity, ruleOptions, isOriginalRuleArray] = Array.isArray(ruleConfig)
          ? [ruleConfig[0], ruleConfig.slice(1) as unknown[], true]
          : [ruleConfig, [], false];

        let newRuleEntry: Linter.RuleEntry<unknown[]> | Linter.Severity = ruleConfig;

        if (targetSeverity === RuleSeverity.Warn) {
          if (currentSeverity === RuleSeverity.Error || currentSeverity === RuleSeverityNum.Error) {
            newRuleEntry = isOriginalRuleArray ? [RuleSeverity.Warn, ...ruleOptions] : RuleSeverity.Warn;
          }
        }

        if (targetSeverity === RuleSeverity.Error) {
          if (currentSeverity === RuleSeverity.Warn || currentSeverity === RuleSeverityNum.Warn) {
            newRuleEntry = isOriginalRuleArray ? [RuleSeverity.Error, ...ruleOptions] : RuleSeverity.Error;
          }
        }

        newRules[ruleId] = newRuleEntry;
      }
      newConfig.rules = newRules;
    }

    transformedConfigs.push(newConfig);
  }

  return transformedConfigs;
}
