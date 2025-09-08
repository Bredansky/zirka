import { RuleSeverity, styleguide } from "./eslint";

// eslint-disable-next-line import/no-default-export -- ESLint config requires default export
export default styleguide({ node: RuleSeverity.Error, typescript: RuleSeverity.Error });
