//import webpack plugin
const HtmlWebPackPlugin = require('html-webpack-plugin')

const babelRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "babel-plugin-transform-class-properties"
  ]
}

const cssRules = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
}

module.exports = {
  output: {
    filename: 'app.[contentHash].js'
  },
  module:{
    rules:[babelRules, cssRules]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 3000,
  },
}