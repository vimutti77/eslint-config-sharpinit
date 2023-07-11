const { overrides, rules, setttings } = require('@sharpinit/eslint-base')

module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
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
  setttings: {
    ...setttings,
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    ...rules.base,
    ...rules.import,
    ...rules.jsxA11y,
    ...rules.prettier,
    ...rules.react,
    ...rules.typescript,
  },
  overrides: [overrides],
  reportUnusedDisableDirectives: true,
}
