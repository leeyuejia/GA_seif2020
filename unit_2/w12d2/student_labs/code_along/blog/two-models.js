const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/twomodels');

const articleSchema = new Schema({
	title: { type: String },
	author: { type: Schema.Types.ObjectId, ref: 'Author' } //the author property is just an id of another object
});

const authorSchema = new Schema({
	name: { type: String },
	articles: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
});

const Article = mongoose.model('Article', articleSchema);
const Author = mongoose.model('Author', authorSchema);

const matt = new Author({ name: 'Matt' });

matt.save(() => {
	let article1 = new Article({ title: 'Awesome Title', author: matt._id });
	article1.save(() => {
		showAllArticles();
		article_id = article1._id;
		matt.articles.push(article_id);
		matt.save(() => {
			showAllAuthors();
		});
	});
});

const showAllAuthors = () => {
	Author.find()
		.populate('articles')
		.exec((err, authors) => {
			if (err) console.error(err.message);

			if (authors) {
				console.log('Showing all authors..');
				authors.forEach(author => {
					console.log(author);
				});
			}
		});
};

const showAllArticles = () => {
	Article.find()
		.populate('author')
		.exec((err, articles) => {
			if (err) console.error(err.message);

			if (articles) {
				console.log('Showing all articles..');
				console.log(articles);
			}
		});
};
