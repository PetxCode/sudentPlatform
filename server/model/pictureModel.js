const mongoose = require("mongoose");

const pictureModel = mongoose.Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    imageID: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("pictures", pictureModel);
