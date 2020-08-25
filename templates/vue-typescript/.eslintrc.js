module.exports = {
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  rules: {
    indent: ["warn", 2],
  },
  ignorePatterns: ["!.eslintrc.js", "flayyer-*", "static"],
};
