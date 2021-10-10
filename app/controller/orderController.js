var Order = require('../model/Order')
var Product = require('../model/Product')
const Ravepay = require('flutterwave-node');
var {emptyCart} = require('./cartController')
require('dotenv').config()

var PUBLIC_KEY = process.env.PUBLIC_KEY
var SECRET_KEY = process.env.SECRET_KEY
var ENCRYPTION_KEY = process.env.ENCRYPTION_KEY
var PRODUCTION_FLAG = process.env.PRODUCTION_FLAG

const rave = new Ravepay(PUBLIC_KEY, SECRET_KEY,  true);

module.exports.postOrder = (req, res) => {
    var userId = req.user.id
    Order.insertMany(req.body)
      .then(order => {
          Order.updateMany({itemId: order.map(item => item.itemId)}, { userId })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            res.status(200).json({ order })
      })
      .catch(err => console.log(err))
         
      emptyCart(userId)
}

module.exports.getOrder = (req, res) => {
    var userId = req.user.id
    Order.find({ userId })
      .then(order => {
          res.status(200).json({ order })
      })
      .catch(err => {
          res.status(404).json({ err })
      })
}
module.exports.getVendorsOrder = (req, res) => {
    var userId = req.vendor.id
    Product.find({ userId })
      .then(item => {
          Order.find({ itemId: item.map(i => i.itemId)})
            .then(order => res.status(200).json({ order }))
            .catch(err => res.status(400).json({ err }))
      })
      .catch(err => res.status(400).json({mg: 'no item yet'}))
}