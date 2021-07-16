const mongoose = require('mongoose')
const slugify = require('slugify')
const productSchema = new mongoose.Schema({
  name: 
  {
   type: String, 
   required: true, 
   minLength: 3, 
   maxLength: 50 
 },
  price: 
  { 
    type: Number, 
    required: true 
  },
  description:
   { 
    type: String, 
    required: true, 
    minLength: 3, 
    maxLength: 200 
  },
  stock: {
    type: Number, 
    required: true 
  },
  origin: { 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
     ref: 'Origin'
     },
  image: { 
    type: String, 
    
  },
  slug:{
    type: String,
    required: true,
    unique: true
  }
})

productSchema.pre('validate', function(next){
  if(this.name){
    this.slug = slugify(this.name , {
      lower: true,
      strict : true
    })
  }
  next()
})

productSchema
  .virtual('url')
  .get(function() {
    return '/product/' + this._id;
  })

module.exports = mongoose.model('Product' , productSchema)