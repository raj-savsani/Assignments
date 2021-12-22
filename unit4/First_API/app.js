const express = require('express');

const user = require('./users.json');

const app =  express();


app.get('/', (req, res) => {
    return res.send(user);
});


// app.get('/', (req, res) => {
//    return res.send('Welcome to Home Page');
// });


app.listen(2346, function () {
    console.log("listen on Port 2346");
})