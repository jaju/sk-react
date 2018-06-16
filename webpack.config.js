const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'head'
})


module.exports = [
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
          test: /\.scss$/,
          use: [
            process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
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
    plugins: [
      HtmlWebpackPluginConfig,
      new CopyWebpackPlugin([{from: './src/index.html', to: path.resolve(__dirname, 'resources/public')}]),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "css/[name].css",
        chunkFilename: "[id].css"
      })
    ]
  }
]
