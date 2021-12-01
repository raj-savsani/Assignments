/*

const express = require("express");

const connect = require("./config/db");

const app = express();

const start = async () => {
  await connect();

  app.listen(1122,()=>{
    console.log("Your Listening On 1122...");
  })
};

module.exports = { start, app };
*/



const app = require('./index');

const connect = require('./config/db');

const userController = require("./controllers/user.controller");

app.use('/user',userController);


app.listen(1122,async()=>{

    await connect();

    console.log("Listening on port 1122");

});