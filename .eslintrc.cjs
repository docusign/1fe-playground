/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    System: "readonly",
    React: "readonly",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off", // Disable prop-types as we use TypeScript
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "off", // Turn off base rule as it can report incorrect errors
    "no-redeclare": "off", // Allow redeclare for type definitions
    "@typescript-eslint/no-redeclare": "off", // Allow redeclare for type definitions
  },
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx", "*.spec.ts", "*.spec.tsx"],
      env: {
        jest: true,
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "off",
        "no-undef": "off",
      },
    },
  ],
};