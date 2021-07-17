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


module.exports = mongoose.model('Origin' , originSchema)