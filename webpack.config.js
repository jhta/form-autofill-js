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
  plugins: [
    new CleanPlugin(['dist'])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
