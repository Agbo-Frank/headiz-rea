var { Router } = require('express')
var { authenticateUser, authenticateVendor} = require('../middleWare/protectRoute')
var { postOrder, getOrder, getVendorsOrder } = require('../controller/orderController')

var router = Router()

router.post('/', authenticateUser, postOrder)

router.get('/', authenticateUser, getOrder)

router.get('/vendor', authenticateVendor, getVendorsOrder)

module.exports = router