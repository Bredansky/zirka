import { RuleSeverity, styleguide } from "./styleguide";

const { eslintConfig } = styleguide({ node: RuleSeverity.Error, typescript: RuleSeverity.Error });

export default eslintConfig;
