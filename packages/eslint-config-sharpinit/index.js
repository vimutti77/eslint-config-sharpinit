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
    ...require('../../common/rules/base'),
    ...require('../../common/rules/import'),
    ...require('../../common/rules/prettier'),
    ...require('../../common/rules/typescript'),
  },
}
