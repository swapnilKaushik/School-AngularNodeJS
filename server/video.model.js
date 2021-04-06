const mongoose = require('mongoose')

const schema = mongoose.Schema

let VideoSchema = new schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    vedioID: {
        type: String,
        required: true
    }
},
    { createIndexes: true }, {
    collection: 'videoalbums'
});


var VideoGal = mongoose.model('videoalbums', VideoSchema)
module.exports = VideoGal;