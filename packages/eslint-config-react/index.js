const rules = require('@sharpinit/eslint-rules')

module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.mjs'],
  },
  env: {
    browser: true,
  },
  rules: {
    ...rules.base,
    ...rules.import,
    ...rules.jsxA11y,
    ...rules.prettier,
    ...rules.react,
    ...rules.typescript,
  },
}
