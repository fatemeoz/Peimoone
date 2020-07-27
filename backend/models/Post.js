const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Post', postSchema);
