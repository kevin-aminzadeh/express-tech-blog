const router = require("express").Router();
const { UserController } = require("../../controllers");

// Register User
router.post("/", UserController.registerUser);

// Authenticate User
router.post("/login", UserController.logIn);

// Logout
router.post("/logout", UserController.logOut);

module.exports = router;
