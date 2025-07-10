/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@1fe/eslint-config'],
  rules: {
    // Disable prop-types since we're using TypeScript
    'react/prop-types': 'off',
  },
};