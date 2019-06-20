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
    $: 'jquery',
    jQuery: 'jquery'
  },
  mode: 'production',
  watch: false
};