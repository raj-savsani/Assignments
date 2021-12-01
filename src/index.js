/*

const { start, app } = require("./server");

// const express = require("express");

// app.use(express.json());

const userController = require("./controllers/user.controller");

app.use("/user", userController);

start();
*/


const  express = require('express')

const app = express();


module.exports = app;