const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://raj_savsani:raj22@cluster0.ybbtu.mongodb.net/fileuploads"
  );
};
