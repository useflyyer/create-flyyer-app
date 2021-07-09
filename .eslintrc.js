module.exports = {
  extends: [
    "@flyyer/eslint-config",
    "@flyyer/eslint-config/typescript",
    "oclif",
    "oclif-typescript",
    "@flyyer/eslint-config/prettier",
  ],
  rules: {
    "unicorn/no-abusive-eslint-disable": "off",
    "@typescript-eslint/no-shadow": "off",
  },
};
