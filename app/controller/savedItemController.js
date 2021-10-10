const Product = require('../model/Product')
const User = require('../model/User')

module.exports.likeItem= (req, res) => {
    var productId = req.body.id
    var userId = req.user.id
    User.updateOne({_id: userId}, {
        $addToSet: {savedItems: productId}
    })
     .then(user => res.status(200).json({ user: user.savedItems }))
     .catch(err => { 
        console.log(`err${err}`)
        res.status(404).json({ error: 'try again'})})

}

module.exports.unlikeItem= (req, res) => {
    var productId = req.params.id
    var userId = req.user.id
    User.updateOne({_id: userId}, {
        $pull: {savedItems: productId}
    })
     .then(user => res.status(200).json({ user: user.savedItems }))
     .catch(err => res.status(404).json({ error: 'try again'}))

}

module.exports.getItem= (req, res) => {
    var userId = req.user.id
    User.findOne({ _id: userId })
      .then(user => {
          Product.find({ _id: user.savedItems })
            .then(product => {
                res.status(200).json({ product })
            })
            .catch(err => res.status(404).json({ err }))
      })
      .catch(err => res.status(404).json({ err }))

}