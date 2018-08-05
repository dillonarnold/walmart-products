const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/client/App.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public/js'),
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  watchOptions: {
    ignored: /node_modules/
  }
};
