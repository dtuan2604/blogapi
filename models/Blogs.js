const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    pokemon:{
        availability: {
            type: Boolean,
            required: true,
            default: false
        },
        id: String,
        name: String,
        types: Array,
        img: String,
    },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Blogs', BlogSchema)