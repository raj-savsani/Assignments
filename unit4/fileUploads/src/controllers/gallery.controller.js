const express = require("express");

const router = express.Router();
const Gallery = require("../models/gallery.model");

const upload = require("../middelwares/upload");

router.post("/", upload.array("pictures",5), async (req, res) => {
    const filePath = req.files.map((file) =>file.path) 
  try {
    const user = await Gallery.create({
      user_id: req.body.user_id,
      picturesUrl: filePath,
    });
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

module.exports = router;
