/**
 * This is a webpack configuration file for development build
 */

const path = require("path");
const merge = require("webpack-merge");
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  // Enable sourcemaps for debugging webpack's output.
  // 'inline-source-map' also works with `awesome-typescript-loader`
  devtool: "source-map",

  entry: ["webpack-hot-middleware/client", path.resolve(__dirname, "src/index.tsx")],

  mode: "development",

  module: {
    rules: [
      // CSS loading rule
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          "style-loader", // Injects styles into DOM
          "css-loader", // Loads CSS
        ],
      },

      // SASS loading rule
      {
        test: /\.scss$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          "style-loader", // Injects styles into DOM
          "css-loader", // Loads CSS
          "sass-loader", // Converts SASS into CSS
        ],
      },
    ],
  },

  output: {
    filename: "[name].bundle.js",
  },

  performance: {
    hints: false,
  },

  plugins: [
    new HotModuleReplacementPlugin(),

    // Auto-generates the `index.html` based on the existing template
    // with the up-to-date JS bundle import
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => `
        <html lang="en">
          <head>
            <title>Delivery Portal</title>
            ${htmlWebpackPlugin.tags.headTags}
          </head>
          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
            ${htmlWebpackPlugin.tags.bodyTags}
          </body>
        </html>
      `,
      filename: "index.html",
      meta: {
        viewport: "width=device-width, initial-scale=1",
        charset: "utf-8",
      },
      favicon: path.resolve(__dirname, "src/assets/images/favicon.ico"),
      cache: true,
      inject: "body",
      scriptLoading: "defer",
    }),
  ],

  stats: "errors-only",
});
