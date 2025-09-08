import { RuleSeverity, styleguide } from "./eslint";

// Ensure styleguide is a function with the correct type
// eslint-disable-next-line import/no-default-export -- ESLint config requires default export
export default styleguide({ node: RuleSeverity.Error, typescript: RuleSeverity.Error });
