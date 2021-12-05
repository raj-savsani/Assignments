const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    const preffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, preffix + "-" + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
}


module.exports = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
    files:5,
  },
});


