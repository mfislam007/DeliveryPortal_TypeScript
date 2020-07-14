const path = require("path");
const chalk = require("chalk");
const express = require("express");

const PORT = process.env.PORT || 5000;
const server = express();

let open;
let openBrowserTab = false;
let link = "http";

switch (process.env.EXECUTION_ENVIRONMENT) {
  case "heroku":
    link += "s";
    break;

  default:
    // Local
    openBrowserTab = true;
    open = require("open");
}

link += `://localhost:${PORT}`;

server
  .use(express.static(path.join(__dirname, "dist")))
  .get(/\/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"), err => {
      if (err) {
        res.status(500).send(err);
      }
    });
  })
  .listen(PORT, () => {
    const filename = path.parse(__filename).base;
    const filenamePrefix = chalk.bgMagenta.black(filename);

    if (openBrowserTab) {
      (async () => {
        await open(link);
      })();
    }

    console.log(
      filenamePrefix +
        chalk.bgBlack.green(` Express server is running on ${link}`) +
        "\n" +
        filenamePrefix +
        chalk.bgBlack.yellow(" Hot reloading is disabled")
    );
  });
