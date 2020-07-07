var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 5000;

var server = express();

server
  .use(express.static(path.join(__dirname, "dist")))
  .get(/\/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, "dist/index.html"), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  })
  .listen(PORT, () => console.log(`Express server is running on 'localhost:${PORT}'`));
