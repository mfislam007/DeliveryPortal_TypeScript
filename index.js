const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

let app = express();

app
  .use(express.static(path.join(__dirname, "dist")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
