const { Router } = require('express')
const { getItem, likeItem, unlikeItem } = require('../controller/savedItemController')

const { authenticateUser } = require('../middleWare/protectRoute')

var router = Router()

//desc   GET Cart
//access private to the user
router.get('/', authenticateUser, getItem)

//desc   Add To Cart 
//access private to the user
router.put('/', authenticateUser, likeItem)

//desc   Remove From Cart
//access private to the user
router.delete('/:id', authenticateUser, unlikeItem)


module.exports = router