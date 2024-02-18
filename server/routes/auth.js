// Choose one of the following import statements based on your file structure

// If userController.js is in the same directory as auth.js
const userController = require('./userController');

// If userController.js is in the controllers directory
// const userController = require('../controllers/userController');

const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = userController;

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;
