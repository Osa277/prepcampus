const express = require("express");
const { getProfileController, updateProfileController } = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Profile routes (require authentication)
router.get("/profile", authMiddleware, getProfileController);
router.put("/profile", authMiddleware, updateProfileController);

module.exports = router;
