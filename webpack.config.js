const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './lib/authservice.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'authservice.js',
    libraryTarget: 'umd',
    library: 'authservice-javascript'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin()
  ]
}
