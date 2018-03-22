const { resolve } = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

console.log('???', __dirname)
module.exports = {
  context: resolve(__dirname, './src/'),
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/hello/',
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello world App',
    }),
  ],
}