const newProduct = (req,res,next) =>{
    res.render('new_product')
}

const viewProduct = (req,res,next) =>{
    res.render('view_product')
}

module.exports = {
    newProduct,
    viewProduct
}