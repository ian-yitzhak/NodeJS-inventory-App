const Origin = require('../models/origin')
const Product = require('../models/product')
const multer = require('multer')
const fs = require('fs')
const path = require('path');

const storage = multer.diskStorage({

    destination: function(req,file,cb){
        cb(null, './public/uploads/images')
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + '-' + file.originalname)
    },
})

const upload  = multer({
    storage: storage,
    limits:{
        fieldSize : 1024 * 1024 * 3,
    },
});


const viewProduct = async (req,res,next) =>{
    try{

    const product = await Product.find({})
    res.render('view_product' , {product: product})
}
catch(e){
res.send(e)
}
}

const newProduct = async (req,res,next) =>{

    try{
        const originName = await Origin.find({})
        const product = new Product()
        res.render('new_product', { originName: originName ,product : product })
    }catch(err){
        res.send(err)
    }
}

const newViewProduct = [

upload.single('image'), 
async(req,res,next) =>{
    console.log(req.file)

    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        origin: req.body.origin,
        price: req.body.price,
        stock: req.body.stock,
        image: req.file.filename,
        

    })
    try{
        await product.save()
        res.redirect('/product/product')
    }catch(err){
        res.send(err)
    }
} 
]

module.exports = {
    newProduct,
    viewProduct,
    newViewProduct
}