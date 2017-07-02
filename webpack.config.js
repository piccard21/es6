var webpack = require('webpack');

module.exports = {
  entry: './src/08_ES6_modules.js',
  devtool: 'source-map',
  output: {
    filename: './output/08_ES6_modules.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  }
} 
