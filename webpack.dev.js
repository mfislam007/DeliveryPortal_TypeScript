/**
 * This is a webpack configuration file for development build
 */

const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
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

  plugins: [
    // Auto-generates the `index.html` based on the existing template
    // with the up-to-date JS bundle import
    new HtmlWebpackPlugin({
      // template: path.resolve(__dirname, "src/index.html"),
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
});
