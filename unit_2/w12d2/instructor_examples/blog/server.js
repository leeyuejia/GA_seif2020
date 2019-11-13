const express = require('express');
const app = express();
const methodOverride = require('method-override')
const mongoose = require('mongoose');



//...farther down the page
mongoose.connect('mongodb://localhost:27017/blog');

mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
});


const authorsController = require('./controllers/authors.js');
const articlesController = require('./controllers/articles.js');



//middleware
// allows us to use put and delete methods
app.use(methodOverride('_method'))
//body parser
app.use(express.urlencoded({extended:false}));


// Use contollers
app.use('/authors', authorsController);
app.use('/articles', articlesController);


app.get('/', (req, res)=>{
	res.render('index.ejs');
});


app.listen(3000, ()=>{
	console.log('listening....');
});