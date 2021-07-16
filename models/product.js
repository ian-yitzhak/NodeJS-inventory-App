const mongoose = require('mongoose')



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
    
  }
})

module.exports = mongoose.model('Product' , productSchema)