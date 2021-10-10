const jwt = require('jsonwebtoken')
require('dotenv').config()

var screte = process.env.JWT_SCRETE

module.exports.authenticateUser = (req, res, next) => {
    var token = req.header('x-auth-token')

    try {
        jwt.verify(token, screte, (err, decoded) => {
            console.log(err);
            if(decoded.isUser){
                req.user = decoded
                next()
            }
            else{
                res.status(400).json({error: 'please Login'})
            }
        } )
    } catch (error) {
        res.status(400).json({error: 'token is invalid'})
    }
    
}

module.exports.authenticateVendor = (req, res, next) => {
    var token = req.header('x-auth-token')

    try {
        jwt.verify(token, screte, (err, decoded) => {
            console.log(err);
            if(!decoded.isUser){
                req.vendor = decoded
                next()
            }
            else{
                res.status(400).json({error: 'please Login'})
            }
        } )
    } catch (error) {
        res.status(400).json({error: 'token is invalid'})
    }
    
}