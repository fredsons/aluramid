module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],

  rules: {
    quotes: ["error", "double"],
  },
};