const express = require('express')
const router = express.Router()

const productController = require('../controllers/product')

router.get('/new' ,productController.newProduct )
router.get('/product' ,productController.viewProduct )



module.exports = router