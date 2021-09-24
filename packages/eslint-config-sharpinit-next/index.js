module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@next/next/recommended',
    'next/core-web-vitals',
    'prettier',
    require.resolve('../rules/base'),
    require.resolve('../rules/import'),
    require.resolve('../rules/jsx-a11y'),
    require.resolve('../rules/prettier'),
    require.resolve('../rules/react'),
    require.resolve('../rules/typescript'),
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
  },
  env: {
    browser: true,
  },
}
