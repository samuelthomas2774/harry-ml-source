const path = require('path');

module.exports = {
  entry: [
    './src/js/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build/js/'),
    filename: 'final.js'
  },
  externals: {
    jquery: true,
    bootstrap: true
  },
  mode: 'production',
  watch: false
};