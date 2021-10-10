const { Router } = require('express')
const { postProduct, updateProduct, getProducts, getVendorProduct, delProduct, getVendorItem} = require('../controller/productController')
const { authenticateVendor } = require('../middleWare/protectRoute')

var router = Router()

//desc    get product
//access  public
router.get('/', getProducts)

//desc    get all vendor's product
//access  private to the vendor
router.get('/vendorProduct', authenticateVendor, getVendorProduct)

//desc    get one of the vendor's product
//access  private to the vendor
router.get('/item/:id', getVendorItem)

//desc   Post Product
//access Private To The Vendor
router.post('/', authenticateVendor,  postProduct)

//desc   Post Product
//access Private To The Vendor
router.put('/', authenticateVendor, updateProduct)

//desc   delete product
//access private to the vendor
router.delete('/:id',authenticateVendor, delProduct)

module.exports = router