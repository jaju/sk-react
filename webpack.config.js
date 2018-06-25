const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'head'
})

module.exports = [
  {
    entry: './src/scss/bundle.scss',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'resources/public')
    },
    module: {
      rules: [
        { test: /\.scss$/,
          use: [
            {loader: MiniCssExtractPlugin.loader},
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ]}]},
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "css/bundle.css"
      })
    ]
  },

  {
    entry: './src/js/bundle.js',
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'resources/public'),
      filename: 'js/bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }
      ]
    },
    plugins: [HtmlWebpackPluginConfig]
  }
]
