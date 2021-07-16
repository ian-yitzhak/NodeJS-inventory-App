const express = require('express')
const router = express.Router()

const productController = require('../controllers/product')

router.get('/new' ,productController.newProduct )
router.get('/product' ,productController.viewProduct )
router.post('/new' , productController.newViewProduct)
router.delete('/:id',productController.deleteProduct)
router.get('/show/:slug', productController.getById )
router.put('/edit', productRouter.editProduct)


module.exports = router