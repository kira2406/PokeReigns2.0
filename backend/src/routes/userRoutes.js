const express = require("express")
const userController = require("../controllers/userController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// fetch user data route
router.post("/fetchUserData",verifyToken, userController.fetchUserData)

module.exports = router;