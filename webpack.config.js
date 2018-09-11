const path = require('path');
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'Autofill'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [require('babel-plugin-transform-es2015-modules-commonjs')]
          }
        }
      }
    ]
  }
};
