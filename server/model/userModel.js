const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    code: {
      type: String,
    },
    secret: {
      type: String,
    },
    token: {
      type: String,
    },
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },

    interest: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "interests",
      },
    ],
    software: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "softwares",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userModel);
