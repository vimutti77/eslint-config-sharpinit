const { overrides, rules, setttings } = require('@sharpinit/eslint-base')

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
    extraFileExtensions: ['.mjs'],
  },
  setttings,
  rules: {
    ...rules.base,
    ...rules.import,
    ...rules.prettier,
    ...rules.typescript,
  },
  overrides: [overrides],
  reportUnusedDisableDirectives: true,
}
