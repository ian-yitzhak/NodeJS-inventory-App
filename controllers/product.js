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

    const product = await Product.find({}).limit(10).sort({$natural:-1})
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

        res.redirect('/login/login')
        if (req.body.password !== 'ian') {
    res.send('incorrect pasword')

    return next(err);
}

        res.redirect(`/product/show/${product.slug }`)
    }catch(err){
        res.send(err)
    }
} 
]

const deleteProduct = async (req,res,next) =>{
    
    await Product.findByIdAndDelete(req.params.id)
    res.redirect('/login/login')
    if (req.body.password !== 'ian') {
    res.send('incorrect pasword')

    return next(err);
  }

  res.redirect('/product/product')


}

const getById = async (req,res,next) =>{

    const product = await Product.findOne({ slug: req.params.slug })
    if(product == null){
        res.redirect('/product/product')
}
res.render('show', { product: product })
}

const editProduct = 
[
upload.single('image'), 
async(req,res,next)=>{
    
  req.product = await Product.findById(req.params.id);
  let product = req.product;

    product.name= req.body.name
    product.description = req.body.description
    product.origin = req.body.origin
    product.price = req.body.price
    product.stock = req.body.stock
    product.image = req.file.filename

        try{
        product = await product.save()
        res.redirect('/login/login')
        if (req.body.password !== 'ian') {
    res.send('incorrect pasword')

    return next(err);
}
        res.redirect(`/product/show/${product.slug }`)
    }catch(err){
        res.status(422).send(err)
    }
}
]

const getEditProduct = async(req,res,next)=>{
    const origin = await Origin.find({})
    const product = await Product.findById(req.params.id)
    res.render('edit', {product : product , origin: origin })
}



module.exports = {
    newProduct,
    viewProduct,
    newViewProduct,
    deleteProduct,
    getById,
    editProduct,
    getEditProduct
}