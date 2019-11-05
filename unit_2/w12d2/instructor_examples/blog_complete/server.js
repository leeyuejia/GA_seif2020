const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));

const authorsController = require('./controllers/authors.js');
app.use('/authors', authorsController);
const articlesController = require('./controllers/articles.js');
app.use('/articles', articlesController);

app.get('/', (req, res)=>{
	res.render('index.ejs');
});

mongoose.connect('mongodb://localhost:27017/blog');

mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
});

app.listen(3000, ()=>{
	console.log('listening....');
});
