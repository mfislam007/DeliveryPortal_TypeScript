/**
 * This is a common webpack configuration file for both development
 * and production builds
 */

const path = require("path");
const webpack = require("webpack");
const { CheckerPlugin } = require("awesome-typescript-loader");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {
  // Webpack data caching
  cache: {
    type: "memory",
  },

  // `webpack-dev-server` settings
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
  },

  // Enable sourcemaps for debugging webpack's output.
  // 'inline-source-map' also works with `awesome-typescript-loader`
  devtool: "source-map",

  entry: {
    app: path.resolve(__dirname, "src/index.tsx"),
    vendor: ["react", "react-dom"],
  },

  module: {
    rules: [
      // TS loading rule
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },

      // JS source map loading rule
      {
        test: /\.m?js$/i,
        enforce: "pre",
        loader: "source-map-loader",
      },

      // HTML loading rule
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },

      // Font loading rule
      {
        test: /\.(woff|woff2|ttf|eot)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contentHash].[ext]",
            outputPath: "assets/fonts/",
          },
        },
      },

      // Image loading rule
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/i,
        exclude: /images\/favicon\.ico/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contentHash].[ext]",
            outputPath: "assets/images/",
          },
        },
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    // Typescript checker
    new CheckerPlugin(),

    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
    }),
  ],

  resolve: {
    extensions: ["css", ".js", "jsx", ".ts", ".tsx"],
  },
};
