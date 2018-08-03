const path = require('path');

module.exports = {
  entry: {
    app: './src/client/App.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public/js'),
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },
  watchOptions: {
    ignored: /node_modules/
  }
};
