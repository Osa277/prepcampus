const express = require('express')

const router = express.Router()
const adminDashboard = require('../controllers/adminController')

router.get('/dashboad', adminDashboard)
module.exports = router