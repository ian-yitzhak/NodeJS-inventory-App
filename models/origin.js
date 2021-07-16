const mongoose = require('mongoose')
const slugify = require('slugify')
const originSchema = new mongoose.Schema({

	name:{
		type: String,
		required: true
	},
	description :{
		type:String,
		required: true
	}
	
})

originSchema
  .virtual('url')
  .get(function() {
    return '/origin/' + this._id;
  })


originSchema.pre('validate', function(next){
  if(this.name){
    this.slug = slugify(this.name , {
      lower: true,
      strict : true
    })
  }
  next()
})



module.exports = mongoose.model('Origin' , originSchema)