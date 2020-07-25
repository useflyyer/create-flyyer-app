// {
//   "extends": [
//     "oclif",
//     "oclif-typescript"
//   ],
//   "rules": {
//     "no-warning-comments": "off"
//   }
// }

module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  settings: {},
  env: {
    "jest/globals": true,
  },
  extends: [
    "oclif",
    "oclif-typescript",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  plugins: ["jest"],
  rules: {
    eqeqeq: "error",
    "no-alert": "warn",
    "no-console": "warn",
    // "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "unicorn/no-abusive-eslint-disable": "off",
  },
};
