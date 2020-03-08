const URL =require('../controllers/main')
const express = require('express')
const router = express.Router()

router.use(URL)

module.exports = router;
