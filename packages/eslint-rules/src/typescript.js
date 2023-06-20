module.exports = {
  '@typescript-eslint/lines-between-class-members': 'off',
  '@typescript-eslint/naming-convention': 'off',
  '@typescript-eslint/no-unnecessary-condition': 'warn',
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: false,
      classes: true,
      variables: false,
      allowNamedExports: false,
    },
  ],
}
