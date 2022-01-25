module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
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
    ...require('../../common/rules/base'),
    ...require('../../common/rules/import'),
    ...require('../../common/rules/jsx-a11y'),
    ...require('../../common/rules/prettier'),
    ...require('../../common/rules/react'),
    ...require('../../common/rules/typescript'),
  },
}
