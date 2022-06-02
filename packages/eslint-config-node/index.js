const rules = require('@sharpinit/eslint-rules')

module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
    extraFileExtensions: ['.mjs'],
  },
  rules: {
    ...rules.base,
    ...rules.import,
    ...rules.prettier,
    ...rules.typescript,
  },
}
