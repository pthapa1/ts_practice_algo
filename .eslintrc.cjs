module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // eslint-config-prettier disables all the conflict with standard-with-typescript and prettier
  extends: [
    "standard-with-typescript",
    "eslint-config-prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}", "*.js", "*.jsx", "*.ts", "*.tsx"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
