const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const user = require('./app/api/user')
const auth = require('./app/api/auth')
const product = require('./app/api/product')
const cart = require('./app/api/cart')
const order = require('./app/api/order')
const expressFileUpload = require('express-fileupload')
const savedItem = require('./app/api/savedItem')
require('dotenv').config()
var port = process.env.PORT || 5000

var app = express()
app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({limit: '40mb', extended: true}))

var db = process.env.MONGODB_URL

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log(err)) 

app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api/product', product)
app.use('/api/cart', cart)
app.use('/api/savedItem', savedItem)
app.use('/api/order', order)

 if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.resolve(__dirname, './client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'bulid', 'index.html'))
    })
 }


app.listen(port, () => {
    console.log(`listening to port at ${port}`)
})