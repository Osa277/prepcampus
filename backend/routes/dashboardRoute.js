const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const userInfo = require("../controllers/userController");
const upload = require("../helper/fileUploadHelper");
const processInterviewVideo = require("../controllers/processInterviewVideoController");
const router = express.Router();

// router.use(authMiddleware);
router.get('/me/:userId', userInfo); 
router.post("/upload", upload.single("video"), processInterviewVideo )
module.exports = router;