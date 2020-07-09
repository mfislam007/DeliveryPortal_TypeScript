/**
 * This is a common webpack configuration file for both development
 * and production builds
 */

const path = require("path");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {
  cache: {
    type: "memory",
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
    publicPath: "/",
  },

  plugins: [
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
    }),
  ],

  resolve: {
    extensions: [".js", "jsx", ".ts", ".tsx"],
  },
};
