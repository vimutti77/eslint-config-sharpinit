const { overrides, rules, settings } = require('@sharpinit/eslint-base')

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@next/next/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
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
  settings: {
    ...settings,
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
