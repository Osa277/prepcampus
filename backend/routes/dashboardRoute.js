const express = require("express");
const authMiddleware = require("../middleware/authMDW");
const userInfo = require("../controllers/meCTR");
const router = express.Router();

router.use(authMiddleware);
router.get('/me/:userId', userInfo); 

module.exports = router;