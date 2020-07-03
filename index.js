var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 5000;

var app = express();

app
  .use(express.static(path.join(__dirname, "dist")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
