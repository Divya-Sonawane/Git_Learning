const js = require("@eslint/js");

module.exports = [
  {
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
      },
    },
  },
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
];
