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
         res.redirect('/login/login')
        if (req.body.password !== 'ian') {
    res.send('incorrect pasword')

    return next(err);
}
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

const updateOrigin = async(req,res,next) =>{
  req.origin = await Origin.findById(req.params.id);
  let origin = req.origin;

    origin.name= req.body.name
    origin.description = req.body.description
    
    try{
       origin =  await origin.save()
        res.redirect('/login/login')
        if (req.body.password !== 'ian') {
    res.send('incorrect pasword')
    return next(err);
}
res.redirect('/origin/origin')
    }catch(err){
        res.send(err)
    }
} 

const update = async(req,res,next) =>{
    const origin = await Origin.findById(req.params.id)
    res.render('update' , { origin: origin })
}

const deleteOrigin= async (req,res,next) =>{
    
    await Origin.findByIdAndDelete(req.params.id)
    res.redirect('/login/login')
    if (req.body.password !== 'ian') {
    res.send('incorrect pasword')

    return next(err);
  }

  res.redirect('/origin/origin')


}

module.exports = {

    allOrigin,
    newOrigin,
    allOriginById,
    updateOrigin,
    deleteOrigin,
    showOrigin,
    categoryProduct,
    update,
    updateOrigin

}