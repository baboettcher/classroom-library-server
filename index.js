const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () => {
  console.log(`Listening HERE on port ${port}...`)
  winston.info(`Listening on port ${port}...`)
  return
}
);

module.exports = server;

// test2