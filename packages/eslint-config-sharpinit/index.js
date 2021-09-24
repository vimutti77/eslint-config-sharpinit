module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
    require.resolve('../rules/base'),
    require.resolve('../rules/import'),
    require.resolve('../rules/prettier'),
    require.resolve('../rules/typescript'),
  ],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
}
