"use strict";
const app = require("./app");
const config = require("./config");

app.listen(config.port, () =>
  console.log(`Hamster rolling on port ${config.port}`)
);
