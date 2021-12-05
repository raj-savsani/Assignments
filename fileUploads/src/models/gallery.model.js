const { Schema, model } = require("mongoose");
// const mongoose = require("mongoose");

const gallerySchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    picturesUrl:[{type:String, required:true}],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("gallery", gallerySchema);
