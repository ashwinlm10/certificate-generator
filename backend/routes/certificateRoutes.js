const express = require('express')
const router = express.Router()

const { createCertificate, getCertificate} = require('../controllers/certificateController')
const protect = require('../middleware/auth')

//router
router.post('/create', protect, createCertificate)
router.get('/get', protect, getCertificate)

module.exports = router