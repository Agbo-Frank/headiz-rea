const { Router } = require('express')
const { addToCart, removeFromCart, getCart} = require('../controller/cartController')

const { authenticateUser } = require('../middleWare/protectRoute')

var router = Router()

//desc   GET Cart
//access private to the user
router.get('/', authenticateUser, getCart)

//desc   Add To Cart 
//access private to the user
router.put('/', authenticateUser, addToCart)

//desc   Remove From Cart
//access private to the user
router.delete('/:id', authenticateUser, removeFromCart)


module.exports = router