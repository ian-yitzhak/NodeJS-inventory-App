const mongoose = require('mongoose')



const productSchema = new Schema({
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
    type: Schema.Types.ObjectId,
     ref: 'Origin'
     },
  image_url: { 
    type: String, 
    required: true 
  }
})

module.exports = mongoose.model('Product' , productSchema)