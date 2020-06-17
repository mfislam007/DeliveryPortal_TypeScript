/**
 * This is a webpack configuration file for production build
 */

const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  module: {
    rules: [
      // CSS loading rule
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          MiniCssExtractPlugin.loader, // Extracts css into files for loading optimization
          "css-loader", // Loads CSS
        ],
      },

      // SASS loading rule
      {
        test: /\.scss$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into files for loading optimization
          "css-loader", // Loads CSS
          "sass-loader", // Converts SASS into CSS
        ],
      },
    ],
  },

  output: {
    filename: "[name].[contentHash].bundle.js", // '[contentHash]' eliminates outdated client caches vie hash insertion
  },

  // Minimized version generator
  optimization: {
    minimize: true,
    minimizer: [
      // JS minimizer
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        extractComments: "all",
      }),

      // CSS minimizer
      new OptimizeCssAssetsPlugin(),

      // Auto-generates and minimizes the `index.html` based on the existing template
      // with the up-to-date JS bundle import
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),

      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          warnings: "verbose",
          ie8: false,
        },

        // Exclude uglification for the `vendor` chunk
        chunkFilter: chunk => chunk.name !== "vendor",
      }),
    ],
  },

  plugins: [
    // Deletes contents of `dist` directory before each build
    new CleanWebpackPlugin(),

    // Exports CSS files into `dist` directory
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css",
    }),

    // Initializes `react` and `react-dom` in `window` object in
    // order to simulate client caching
    new webpack.ProvidePlugin({
      "window.React": "react",
      "window.ReactDOM": "react-dom",
    }),
  ],
});
