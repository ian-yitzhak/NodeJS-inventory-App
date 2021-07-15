const Origin = require('../models/origin')

const viewProduct = (req,res,next) =>{
    res.render('view_product')
}

const newProduct = async (req,res,next) =>{

    try{
        const originName = await Origin.find({})
        res.render('new_product', { originName: originName })
    }catch(err){
        res.send(err)
    }
}

module.exports = {
    newProduct,
    viewProduct
}