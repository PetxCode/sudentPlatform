const express = require("express");
const upload = require("../utils/multer");
// const logo = require("../utils/logo");
const {
  changePassword,
  resetPassword,
  deleteUser,
  updateUserInfo,
  updateUserImage,
  viewUsers,
  verifyUser,
  createUser,
  viewUser,
  signinUser,
  //   deleteMember,
  viewUserMembers,
  //   updateUserLogo,
} = require("../controller/userController");
const router = express.Router();

router.route("/").get(viewUsers);
router.route("/register").post(createUser);

router.route("/signin").post(signinUser);

router.route("/:id/:token").get(verifyUser);

router.route("/:id/").get(viewUserMembers);

router.route("/reset").post(resetPassword);
router.route("/change/:id/:token").post(changePassword);

router.route("/:id/image").patch(upload, updateUserImage);
// router.route("/:id/logo").patch(upload, updateUserLogo);

router.route("/:id").get(viewUser).patch(updateUserInfo).delete(deleteUser);
// router.route("/:id/:member").delete(deleteMember);

module.exports = router;
