const path = require("path");
const chalk = require("chalk");
const open = require("open");
const express = require("express");
const webpack = require("webpack");

const webpackConfig = require("./webpack.development");

const PORT = process.env.PORT || 5000;
const LINK = `http://localhost:${PORT}`;
const server = express();
let latestRequestPath = "";

const filename = path.parse(__filename).base;
const filenamePrefix = chalk.bgMagenta.black(filename);

const compiler = webpack(webpackConfig);

compiler.hooks.beforeCompile.tapAsync("LogWaitMessage", (params, callback) => {
  console.log(filenamePrefix + chalk.bgBlack.yellow(" Waiting for Webpack build…"));
  callback();
});

compiler.hooks.done.tap("OpenBrowserTab", (context, entry) => {
  (async () => {
    await open(LINK + latestRequestPath);
  })();
});

compiler.hooks.done.tap("LogStatus", () => {
  console.log(
    filenamePrefix +
      chalk.bgBlack.green(` Express server is running on ${LINK}`) +
      "\n" +
      filenamePrefix +
      chalk.bgBlack.green(" Hot reloading is enabled")
  );
});

const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, {
  filename: webpackConfig.output.filename,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  stats: "errors-only",
});
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler, {
  heartbeat: 2000,
  reload: true,
  autoConnect: true,
});
const staticMiddleware = express.static(path.join(__dirname, "dist"));

server
  .use(webpackDevMiddleware)
  .use(webpackHotMiddleware)
  .use(staticMiddleware)
  .get("*", (req, res) => {
    latestRequestPath = req.path;
    res.sendFile(path.resolve(compiler.outputPath, "index.html"));
  })
  .listen(PORT);
