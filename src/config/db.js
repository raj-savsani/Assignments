const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    // "mongodb+srv://raj_savsani:raj22@cluster0.ybbtu.mongodb.net/pagination"
    "mongodb://127.0.0.1:27017/pagination"
  );
};

module.exports = connect;
