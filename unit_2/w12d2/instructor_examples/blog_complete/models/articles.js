const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
	title:String,
	body:String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
