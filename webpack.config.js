const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/entry.tsx',
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader',
      // use: [
      //   {
      //     loader: 'url-loader',
      //     options: {
      //       // 最大多大的图片可以转为base64，超过这个大小则使用普通url
      //       limit: 8192,
      //     },
      //   },
      // ],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
