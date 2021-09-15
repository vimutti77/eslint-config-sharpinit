module.exports = {
  "extends": ["airbnb-base", "airbnb-typescript/base", "prettier"],
  "plugins": ["prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": "warn",
    "arrow-body-style": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "no-console": ["warn", { "allow": ["info", "warn", "error"] }],
    "no-nested-ternary": "off",
    "no-param-reassign": ["error", { "props": false }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    "no-underscore-dangle": "off",
    "prefer-destructuring": "off",
    "@typescript-eslint/naming-convention": "off",
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    "@typescript-eslint/no-unused-vars": "warn"
  }
}
