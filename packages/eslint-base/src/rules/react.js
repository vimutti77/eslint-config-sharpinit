module.exports = {
  'react/destructuring-assignment': 'off',
  'react/display-name': 'off',
  'react/function-component-definition': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  'react/jsx-key': [
    'warn',
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
      warnOnDuplicates: true,
    },
  ],
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
  'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
  'react/jsx-props-no-spreading': 'off',
  'react/no-array-index-key': 'off',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
}
