/**
 * This is a webpack configuration file for production build
 *
 *  BUG (Roman Bezusiak) [ `vendor` chunks are minified in `production` mode ]
 */

const path = require("path");
const merge = require("webpack-merge");
const { ProvidePlugin } = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  entry: {
    app: path.resolve(__dirname, "src/index.tsx"),
    vendor: ["react", "react-dom"],
  },

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
    filename: "[name].[contentHash].bundle.js", // '[contentHash]' eliminates outdated client caches via hash insertion
  },

  // Minimized version generator
  optimization: {
    minimize: true,
    minimizer: [
      // JS minimizer
      new TerserPlugin({
        cache: true,
        parallel: false,
        sourceMap: false,
        extractComments: "all",
      }),

      // CSS minimizer
      new OptimizeCssAssetsPlugin(),

      // Auto-generates and minimizes the `index.html` based on the existing template
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
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
        filename: "index.html", // Plugin-specific `contenthash`
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
    new ProvidePlugin({
      "window.React": "react",
      "window.ReactDOM": "react-dom",
    }),
  ],
});
