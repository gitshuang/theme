// stylelint plugin
// Abbreviated example
const stylelint = require("stylelint");

const ruleName = "plugin/color-replace";
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: "Expected ..."
});

module.exports = stylelint.createPlugin(
  ruleName,
  function (primaryOption, secondaryOptionObject) {
    return function (postcssRoot, postcssResult) {
      const validOptions = stylelint.utils.validateOptions(
        postcssResult,
        ruleName,
        {
          /* .. */
        }
      );

      if (!validOptions) {
        return;
      }

      // ... some logic ...
      stylelint.utils.report({
        /* .. */
      });
    };
  }
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;