const express = require("express");
const {
  createUser,
  loginUser,
  recoverPassword,
  editUser,
  changePassword,
} = require("../controllers/users");
const { userIsAuthenticated } = require("../middlewares/auth");
const {
  createUserSchema,
  resetPasswordSchema,
} = require("../validators/users");

const router = express.Router();

// router.route("/").get([userIsAuthenticated, userIsInRole([ROLES.ADMIN])], listUsers);
router.route("/").get();
router.route("/createUser").post(createUser);

router.route("/login").post(loginUser);

router.route("/recover-password").post(recoverPassword);

router.route("/editUser/:id").post(userIsAuthenticated, editUser);

router.route("/changePassword").patch(changePassword);



module.exports = router;
