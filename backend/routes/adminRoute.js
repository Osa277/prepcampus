const express = require('express')
const router = express.Router()
const adminDashboard = require('../controllers/adminController')

router.get('/admin-dashboard', adminDashboard)
module.exports = router