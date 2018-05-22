const { resolve } = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "babel-preset-react"],
            plugins: ["react-hot-loader/babel"]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.png$/,
        exclude: /(node_modules)/,
        use: [{ loader: "file-loader" }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new HtmlWebpackPlugin.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true
  },
  mode: "development"
};
