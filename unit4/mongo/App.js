const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

/*

users

post = /users
get all = /users
get one = /users/:id
update one = /users/:id
delete one = /users/:id


*/

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/movies");
};

const userSchema = new mongoose.Schema({
  movie_name: { type: String, required: true, unique: true },
  movie_genre: { type: String, required: false },
  production_year: { type: Number, required: true },
  budget: { type: Number, required: true },
});

const User = mongoose.model("movie", userSchema);

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).send(user);
  } catch (e) {
    res.status(500).send({ message: e.message, status: "Failed" });
  }
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id).lean().exec();

  res.send({ user });
});

app.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send({ user });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send({ user });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

app.listen(1234, async () => {
  await connect();
  console.log("Your are listening on port 1234");
});
