const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/js/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build/js/'),
    filename: 'final.js'
  },
  mode: 'production',
  watch: false
};
