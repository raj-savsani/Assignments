const express = require('express');
const connect = require("./config/db");

const app = express();
app.use(express.json());

const start = async () => {
  await connect();

  app.listen(1122, () => {
    console.log("listening on port 1122");
  });
};

module.exports = {start, app};
