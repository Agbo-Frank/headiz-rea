const Product = require('../model/Product')
const User = require('../model/User')
const cloudinary = require('../middleWare/cloudinary')

module.exports.postProduct = (req, res) => {
    var { name, description, price, image, category, availability  } = req.body

    var userId = req.vendor.id

   cloudinary.uploader.upload(image, (error, result) =>{
    
    var newProduct = new Product({ 
        name,
        file_id: result.public_id,
        file_url: result.secure_url,
        userId, 
        availability,
        description, 
        price, 
        category  })

newProduct.save()
 .then(product => {
     res.status(200).json({ product, message: 'product Upload successfull' })})
 .catch(err => res.status(404).json({message: 'product Upload unsuccessfull'}))
})
}

module.exports.updateProduct = (req, res) => {
    var { name, description, price, image, category, itemId, availability  } = req.body

    var userId = req.vendor.id

    Product.findById(itemId)
      .then(item => {
        cloudinary.uploader.destroy(item.file_id)

            cloudinary.uploader.upload(image, (error, result) =>{
                Product.updateOne({_id: item._id}, {
                    name: item.name || name,
                    userId,
                    file_id: item.file_id || result.public_id,
                    file_url:item.file_url || result.secure_url,
                    availability: item.availability || availability,
                    description: item.description || description, 
                    price: item.price || price, 
                    category: item.category || category
                })
                   .then(product => {
                       res.status(404).json({ product })})
                   .catch(err => res.status(404).json({error: err}))
        });});
        
}

module.exports.getProducts = (req, res) => {
    Product.find({ })
     .sort({date: -1})
     .then(product => res.status(200).json({ product }))
     .catch(err => res.status(404).json({ error: 'try again'}))
}

module.exports.getVendorProduct = (req, res) => {
    var id = req.vendor.id
    Product.find({userId: id})
     .sort({date: -1})
     .then(product => res.status(200).json({ product }))
     .catch(err => res.status(404).json({ err}))
}

module.exports.getVendorItem = (req, res) => {
    var itemId = req.params.id
        Product.findById(itemId)
            .sort({date: -1})
            .then(product => res.status(200).json({ product }))
            .catch(err => res.status(404).json({ err}))
}

module.exports.delProduct = (req, res) => {
    var id = req.params.id

    Product.findByIdAndDelete(id)
     .then(product => res.status(200).json({message: 'successful'}))
     .catch(err => res.status(404).json({ error: 'try again'}))
}