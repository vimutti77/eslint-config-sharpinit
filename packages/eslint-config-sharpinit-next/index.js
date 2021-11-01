module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@next/next/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
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
    ...require('../../rules/base'),
    ...require('../../rules/import'),
    ...require('../../rules/jsx-a11y'),
    ...require('../../rules/prettier'),
    ...require('../../rules/react'),
    ...require('../../rules/typescript'),
  },
}
