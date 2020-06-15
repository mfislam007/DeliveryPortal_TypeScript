const { CheckerPlugin } = require("awesome-typescript-loader");
const path = require("path");

module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  //  NOTE (Roman Bezusiak) [ 'inline-source-map' also works with `awesome-typescript-loader` ]
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", ".native.js", ".png", ".ttf"],
  },

  entry: "./src/index.tsx",

  module: {
    rules: [
      // All source code is processed by this rule
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        loader: "babel-loader",
      },

      // All output '.js' files will have any sourcemaps re-processed in this rule
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader",
      },

      // Image loading rule
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: path.resolve(__dirname, "src/assets/images"),
        loader: "file-loader",
      },

      // Asset fonts are processed by this rule
      {
        test: /\.ttf$/,
        include: path.resolve(__dirname, "src/assets/fonts"),
        loader: "url-loader", // or directly file-loader
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },

  plugins: [new CheckerPlugin()],
};
