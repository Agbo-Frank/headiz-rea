var mongoose = require('mongoose')

var OrderSchema = new mongoose.Schema({
    itemId: String,
    userId: String,
    firstName: String,
    lastName: String,
    name: String,
    address: String,
    town: String,
    state: String,
    phoneNumber: Number,
    email: {
        type: String
    },
    price: Number,
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('order', OrderSchema)