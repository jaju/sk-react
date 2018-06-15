const path = require('path')

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: path.resolve('resources/public/js'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
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
    }
  }
]
