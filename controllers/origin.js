const Origin = require('../models/origin')
const Product = require('../models/product')
const async = require('async');

const showOrigin = (req,res,next) =>{
    res.render('new_origin')
}
const categoryProduct = (req,res,next) =>{
 async.parallel({
    origin: function(callback) {
      Origin.findById(req.params.id).exec(callback);
    },
    product: function(callback) {
      Product.find({ 'origin': req.params.id }).exec(callback);
    },
  }, function (err, results) {
    if (err) { return next(err); }
    if (results.origin == null) {
      const err = new Error('category not found');
      err.status = 404;
      return next(err);
    }
    res.render('category_pro', {
      origin: results.origin,
      product: results.product
    })
  })
};
  

//new Origin
const  newOrigin = async(req, res, next) => {
    const origin = new Origin({
        name: req.body.name,
        description: req.body.description
    })
    try{
        const savedOrigin = await origin.save()
        res.redirect('/origin/origin')
    }catch(err){
        res.status(400).send(err)
    }
   
};

//get All Origin
const allOrigin = async (req, res, next) => {
    try{
        const allOrigin = await Origin.find({})
        res.render('view_origin', {allOrigin: allOrigin})
    }catch(err){
        res.send(errs)
    }

};

const allOriginById= async(req,res,next)=>{
    try{
        const origin = await Origin.findById(req.params.id)

        if(!origin){
            res.status(404).send('not found')
        }
        res.status(200).send(origin)
    }catch(err){
        res.status(500).send(err)
    }
}


const updateOrigin = async(req,res,next)=>{

    const id = req.params.id
    const body = req.body
    try{
        const origin = await Origin.findByIdAndUpdate(id, body)

        if(!origin){
            res.status(404).send('not found')
        }
        res.send(origin)
    }catch(err){
        res.status(422).send(err)
    }
}

const deleteOrigin = async(req,res,next)=>{

    const id = req.params.id
    
    try{
        const origin = await Origin.findByIdAndDelete(id)

        if(!origin){
            res.status(404).send('not found')
        }
        res.send(origin)
    }catch(err){
        res.status(500).send(err)
    }
}
module.exports = {

    allOrigin,
    newOrigin,
    allOriginById,
    updateOrigin,
    deleteOrigin,
    showOrigin,
    categoryProduct

}