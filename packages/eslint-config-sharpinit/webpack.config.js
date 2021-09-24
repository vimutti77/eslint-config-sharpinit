const path = require('path')

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
  },
  target: 'node',
}
