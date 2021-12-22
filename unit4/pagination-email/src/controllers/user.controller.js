const express = require("express");
const transporter = require("../config/mail");
const router = express.Router();

const User = require("../models/user.model");

router.get("/", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 2;

    // page = 1 skip (0) limit(2);
    // skip items == (page - 1) * size

    const skip = (page - 1) * size;

    const user = await User.find().skip(skip).limit(size).lean().exec();
    const totalpages = Math.ceil((await User.find().countDocuments()) / size);
    res.send({ user, totalpages });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const admin = [
      "raj@gmail.com",
      "yagnik@gmail.com",
      "james@gmail.com",
      "aditya@gmail.com",
      "shelen@gmail.com",
    ];
    const adminList = admin.join(",")
    const message = {
      from: "raj@gmail.com",
      to: `${req.body.email},${adminList}`,
      subject: `Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
      text: `Hi ${req.body.first_name}, Please confirm your email address`,
      html: `<h1>Hi ${req.body.first_name}, Please confirm your email address</h1>`,
    };

    transporter.sendMail(message);

    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

module.exports = router;
