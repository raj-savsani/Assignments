const mongoose = require("mongoose");

const express = require("express");
const router = express.Router();
const fs = require("fs");

const User = require("../models/user.model");
const Gallery = require("../models/gallery.model");
const upload = require("../middelwares/upload");

router.get("/", async (req, res) => {
  try {
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

router.post("/", upload.single("profile_pic"), async (req, res) => {
  try {
    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      profileUrl: req.file.path,
    });
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

router.patch("/", upload.single("profile_pic"), async (req, res) => {
  try {
    if (req.file.path) {
      const user = await User.findOne({ email: req.body.email });
      let profileUrl = user.profileUrl;
      fs.unlinkSync(profileUrl);
      req.body.profileUrl = req.file.path;
      delete req.file;
    }

    const users = await User.findOneAndUpdate(
      { email: req.body.email },
      req.body,
      {
        new: true,
      }
    );

    return res.status(201).send(users);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

router.delete("/:email", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.params.email });

    let profileUrl = user.profileUrl;

    fs.unlinkSync(profileUrl);

    let id = mongoose.Types.ObjectId(user._id);

    let gallery = await Gallery.findOne({ user_id: id });
    gallery.picturesUrl.forEach((el)=>{
      fs.unlinkSync(el);
    })
    gallery = await Gallery.findOneAndDelete({ user_id: id });
    user = await User.findOneAndDelete({ email: req.params.email });

    return res.status(201).send({message:"Operation success"});
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

module.exports = router;
