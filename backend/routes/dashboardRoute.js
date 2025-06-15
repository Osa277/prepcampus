const express = require("express");
const authMiddleware = require("../middleware/authMDW");
const userInfo = require("../controllers/meCTR");
const upload = require("../utils/uploadLogic");
const audioExtractor = require("../controllers/audioExtractorCTR");
const router = express.Router();

// router.use(authMiddleware);
router.get('/me/:userId', userInfo); 
router.post("/upload", upload.single("video"), audioExtractor)
module.exports = router;