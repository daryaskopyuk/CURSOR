const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
