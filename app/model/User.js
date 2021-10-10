var mongoose = require('mongoose')
var { isEmail } = require('validator')

var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'please Enter your first name']
    },
    lastName: {
        type: String,
        required: [true, 'please Enter your last name']
    },
    email: {
        type: String,
        required: [true, 'please Enter your email'],
        unique: [true, 'This email already exist'],
        validate: [isEmail, 'Please Enter a Valid Email']
    },
    password: {
        type: String,
        required: [true, 'please Enter your password'],
        minlength: [6, 'Enter a password with minimum characters of six']
    },
    phoneNumber: {
        type: Number,
    },
    isUser: {
        type: Boolean,
        default: true
    },
    shopName: String,
    shopUrl: String,
    cart: [ {
        _id: false,
        itemId: String,
        name: String,
        file_id: String,
        quantity: {
            type: Number,
            default: 1
        },
        price: Number
    }],
    bill: Number,
    savedItems: [ String ],
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('user', userSchema)