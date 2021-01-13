/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    inline: true,
    open: true,
    hot: true,
    historyApiFallback: true,
    port: 3005
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*",
      },
    }),
    new HtmlWebPackPlugin({
      inject: true,
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
};
