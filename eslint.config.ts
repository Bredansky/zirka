import { RuleSeverity, styleguide } from "./eslint";

const { eslintConfig } = styleguide({ node: RuleSeverity.Error, typescript: RuleSeverity.Error });

// eslint-disable-next-line import/no-default-export -- ESLint config requires default export
export default eslintConfig;
