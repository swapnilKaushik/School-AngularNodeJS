const mongoose = require('mongoose')

const schema = mongoose.Schema

let GallerySchema = new schema({
	title: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	images: [{
		type: String,
		required: true
	}]
},
	{createIndexes: true}, {
		collection: 'galleries' 
});


var Gallery = mongoose.model('galleries', GallerySchema)
module.exports = Gallery;