const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

var screte = process.env.JWT_SCRETE

module.exports.loginUser = (req, res) => {
    var { email, password } = req.body

    if(!email){
        res.status(404).json({error:{email: 'Please Enter your email'}})
    }
    else if(!password){
        res.status(404).json({error:{password: 'Please Enter your password'}})
    }
    else{
        User.findOne({email: email})
         .then(user => {
             if(!user) res.status('404').json({error:{email: 'this user does not exist'}})
             bcrypt.compare(password, user.password, (err, auth) => {
                if(!auth) {res.status(404).json({error:{password: 'incorrect password'}})}
                else if(auth){
                    jwt.sign({ id: user._id, isUser: user.isUser }, screte, (err, token) => {
                        res.status(200).json({
                            token,
                            user: {
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                                phoneNumber: user.phoneNumber,
                                isUser: user.isUser,
                                cart: user.cart,
                                savedItems: user.savedItems,
                                shopName: user.shopName,
                                shopUrl: user.shopUrl
                            }
                        })
                    })
                }
            });
         })
         .catch(err => res.status(404).json({error: {email: 'incorrect password'}}))
    }
}

module.exports.getUser = (req, res) => {
    User.findOne({_id: req.user.id})
     .select('-password')
     .then(user => {res.status(200).json({user})})
}

module.exports.getVendor = (req, res) => {getVendor
    User.findOne({_id: req.vendor.id})
     .select('-password')
     .then(user => res.status(200).json({user}))
}

module.exports.forgetPassword = (req, res) => {
    var { email } = req.body
    if(!email) return res.status(404).json({message: {email: 'please enter your email'}})
    User.findOne({ email })
     .then(user => {
         if(!user){
             res.status(404).json({message: {email: 'this user does not exist'}})
         }
         else{
            var genPassword = Math.floor(Math.random() * 100000)
            console.log(genPassword);
            genPassword = genPassword.toString()
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(genPassword, salt, (err, hash) => {
                    console.log(hash);
                    User.updateOne({ email }, { password: hash})
                     .then(updatedUser => {
                         res.status(200).json({message: {email: 'succesfull'}})
                     })
                });
            });
         }

     })
}