const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()


var screte = process.env.JWT_SCRETE

function errorHandle(err){
    var errors ={
        firstName: '', 
        lastName: '', 
        email: '', 
        password: '', 
        phoneNumber: '',
    }
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(e => {
            errors[e.path] = e.properties.message
        })
    }
    if(err.code === 11000){
        errors.email = 'this user already exist'
    }
    return errors
}

module.exports.signUser = (req, res) => {
    var { firstName, lastName, email, password, phoneNumber,shopUrl, shopName } = req.body

    var newUser = new User({
        firstName: firstName, 
        lastName: lastName, 
        email: email,
        password: password,
        phoneNumber: phoneNumber
    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash
            newUser.save()
                .then(data => {
            jwt.sign({id: data._id, isUser: data.isUser}, screte, (err, token) => {
                res.status(200).json({ 
                    token, 
                    user: {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        phoneNumber: data.phoneNumber
                    }
                    })
            })
        })
        .catch(err => {
            var error = errorHandle(err)
            res.status(404).json({error: error})
        })
    })

        }) 
}

module.exports.signVendor = (req, res) => {
    var { firstName, lastName, email, password, phoneNumber,shopUrl, shopName } = req.body

    var newUser = new User({
        firstName: firstName, 
        lastName: lastName, 
        email: email,
        shopName: shopName,
        shopUrl: shopUrl,
        isUser: false,
        password: password,
        phoneNumber: phoneNumber
    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash
            newUser.save()
                .then(data => {
            jwt.sign({id: data._id, isUser: data.isUser}, screte, (err, token) => {
                res.status(200).json({ 
                    token, 
                    user: {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        phoneNumber: data.phoneNumber
                    }
                    })
            })
        })
        .catch(err => {
            var error = errorHandle(err)
            res.status(404).json({error: error})
        })
    })

        }) 
}