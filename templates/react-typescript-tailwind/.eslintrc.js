module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off",
    indent: ["warn", 2],
  },
  ignorePatterns: ["!.eslintrc.js", "flayyer-*", "static"],
};
