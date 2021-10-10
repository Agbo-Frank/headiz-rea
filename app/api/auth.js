const express = require('express')
const { loginUser, getUser, forgetPassword, getVendor } = require('../controller/authController')
const { authenticateUser, authenticateVendor } = require('../middleWare/protectRoute')

var router = express.Router()

//desc     LOGIN user
//access   PUBLIC
router.post('/', loginUser)

//desc     GET user
//access   Private
router.get('/user',  authenticateUser, getUser)

//desc     GET Vendor
//access   Private
router.get('/vendor',  authenticateVendor, getVendor)

//desc     forget password
//access   Public
router.post('/forgetPassword', forgetPassword)

module.exports = router