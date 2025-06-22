const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const userInfo = require("../controllers/userController");
const upload = require("../helper/fileUploadHelper");
const processInterviewVideo = require("../controllers/processInterviewVideoController");
const profileController = require("../controllers/profileController");
const techInteviewQuestionController = require("../controllers/techInterviewQuestionController");
const router = express.Router();

// router.use(authMiddleware);
router.post('/profile/:id', profileController)
router.get('/me/:userId', userInfo); 
router.post("/upload-interview-video", upload.single("video"), processInterviewVideo)
router.get("/technical-interview-question", techInteviewQuestionController)
// router.post("/technical-interview-submit")
module.exports = router;