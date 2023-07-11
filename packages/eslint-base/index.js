module.exports = {
  rules: {
    base: require('./src/rules/base'),
    import: require('./src/rules/import'),
    jsxAlly: require('./src/rules/jsx-a11y'),
    prettier: require('./src/rules/prettier'),
    react: require('./src/rules/react'),
    typescript: require('./src/rules/typescript'),
  },
  settings: require('./src/settings'),
  overrides: require('./src/overrides'),
}
