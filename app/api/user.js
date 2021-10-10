const express = require('express')
const userController = require('../controller/userController')

var router = express.Router()

router.post('/', userController.signUser)
router.post('/vendor', userController.signVendor)

module.exports = router