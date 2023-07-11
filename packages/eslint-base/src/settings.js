module.exports = {
  // Apply special parsing for TypeScript files
  'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
  },
  // Append 'ts' extensions to Airbnb 'import/resolver' setting
  // Original: ['.mjs', '.js', '.json']
  'import/resolver': {
    node: {
      extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
    },
  },
  // Append 'ts' extensions to Airbnb 'import/extensions' setting
  // Original: ['.js', '.mjs', '.jsx']
  'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
  // Resolve type definition packages
  'import/external-module-folders': ['node_modules', 'node_modules/@types'],
}
