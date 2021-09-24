module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    ...require('../../rules/base'),
    ...require('../../rules/import'),
    ...require('../../rules/prettier'),
    ...require('../../rules/typescript'),
  },
}
