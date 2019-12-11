const mongoose = require('mongoose');

const bookmarksSchema = new mongoose.Schema({
    title: String,
    url: String
})

const Bookmark = mongoose.model('Bookmark', bookmarksSchema);

module.exports = Bookmark;