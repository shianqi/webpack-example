const { resolve } = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: resolve(__dirname, './'),
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: './',
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello world App',
    }),
  ],
}