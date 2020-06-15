/**
 * This is a common webpack configuration file for both development
 * and production builds
 */

const path = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");

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

  entry: path.resolve(__dirname, "src/index.tsx"),

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
            name: "[name].[ext]",
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
            name: "[name].[ext]",
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
  ],

  resolve: {
    extensions: [".js", "jsx", ".ts", ".tsx"],
  },
};
