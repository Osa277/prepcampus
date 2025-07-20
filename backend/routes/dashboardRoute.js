const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const userInfo = require("../controllers/userController");
const upload = require("../helper/fileUploadHelper");
const processInterviewVideo = require("../controllers/processInterviewVideoController");
const { getProfileController, updateProfileController } = require("../controllers/profileController");
const {
  techInteviewQuestionController,
  techInteviewSubmitController,
} = require("../controllers/techInterviewController");
const levelUpdate = require("../controllers/levelUpdate");
const router = express.Router();

// router.use(authMiddleware);
router.post("/profile/:userId", updateProfileController);
router.get("/currentUser/:userId", userInfo);
router.post(
  "/upload-interview-video",
  upload.single("video"),
  processInterviewVideo
);
router.get("/technical-interview-question", techInteviewQuestionController);
router.patch("/level-update/:userId", levelUpdate);
router.post("/technical-interview-submit", techInteviewSubmitController);
module.exports = router;
