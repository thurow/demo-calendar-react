/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const DotenvWebpackPlugin = require('dotenv-webpack')

module.exports = {
  mode: "production",
  entry: join(__dirname, 'src', 'index.tsx'),
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: join(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new DotenvWebpackPlugin({ systemvars: true }),
    new CleanWebpackPlugin()
  ]
};
