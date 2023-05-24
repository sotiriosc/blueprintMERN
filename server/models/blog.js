const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: [{
        content: String,
        date: {
            type: Date,
            default: Date.now
        },
        author: String
    }]
});

module.exports = mongoose.model('Blog', blogSchema);
