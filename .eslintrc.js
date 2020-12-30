module.exports = {
  extends: [
    "@flayyer/eslint-config",
    "@flayyer/eslint-config/typescript",
    "oclif",
    "oclif-typescript",
    "@flayyer/eslint-config/prettier",
  ],
  rules: {
    "unicorn/no-abusive-eslint-disable": "off",
    "@typescript-eslint/no-shadow": "off",
  },
};
