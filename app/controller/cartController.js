const Product = require('../model/Product')
const User = require('../model/User')
const mongoose = require('mongoose')

module.exports.addToCart= (req, res) => {
    var {itemId, price, category, quantity, file_id, name} = req.body
    var userId = req.user.id
    
    User.updateOne({_id: userId}, {
        $addToSet: {cart: {itemId, price, category, quantity, file_id, name}}
    })
     .then(user => res.status(200).json({ message: 'successful'}))
     .catch(err => res.status(404).json({ error: 'try again'}))

}

module.exports.removeFromCart= (req, res) => {
    var itemId = req.params.id
    var userId = req.user.id
    User.updateOne({_id: userId}, {
        $pull: {cart: {itemId}}
    })
     .then(user => res.status(200).json({ message: 'successful'}))
     .catch(err => res.status(404).json({ error: 'try again'}))

}

module.exports.getCart= (req, res) => {
    var userId = req.user.id
    User.findOne({ _id: userId })
      .then(user => res.status(200).json({ cart: user.cart }))
      .catch(err => res.status(404).json({ err }))
}

module.exports.emptyCart = (id) => {
    User.update({ _id: id},{
        $set: {cart: []}
    }, {multi: true})
      .then(res => console.log(res))
      .catch(err => console.log(err))
}
