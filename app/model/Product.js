var mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
    name: String,
    userId: String,
    file_id: String,
    file_url: String,
    category: String,
    type: String,
    description: String,
    price: Number,
    availability: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('product', productSchema)