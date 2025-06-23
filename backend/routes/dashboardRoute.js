const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const userInfo = require("../controllers/userController");
const upload = require("../helper/fileUploadHelper");
const processInterviewVideo = require("../controllers/processInterviewVideoController");
const profileController = require("../controllers/profileController");
const techInteviewQuestionController = require("../controllers/techInterviewController");
const levelUpdate = require("../controllers/levelUpdate");
const router = express.Router();

// router.use(authMiddleware);
router.post('/profile/:userId', profileController)
router.get('/me/:userId', userInfo); 
router.post("/upload-interview-video", upload.single("video"), processInterviewVideo)
router.get("/technical-interview-question", techInteviewQuestionController)
router.patch("/level-update/:userId", levelUpdate)
// router.post("/technical-interview-submit")
module.exports = router;