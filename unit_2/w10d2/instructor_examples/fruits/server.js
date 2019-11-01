// Dependencies
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

// 'Data'
const fruits = require('./models/fruits.js');

// Index
app.get('/game', (req, res) => {
	res.render('game.ejs', {
		game: 'This is my game'
	});
});

// Index
app.get('/fruits', (req, res) => {
	res.render('index.ejs', {
		fruits: fruits
	});
});

// New
app.get('/fruits/new', (req, res) => {
	res.render('new.ejs');
});

// Show
app.get('/fruits/:index', (req, res) => {
	const currentFruit = fruits[req.params.index];
	res.render('show.ejs', {
		fruit: currentFruit,
		index: req.params.index
	});
});
// Create
app.post('/fruits', (req, res) => {
	if (req.body.readyToEat === 'on') {
		// if checked, req.body.readyToEat is set to 'on'
		req.body.readyToEat = true;
	} else {
		// if not checked, req.body.readyToEat is undefined
		req.body.readyToEat = false;
	}
	fruits.push(req.body);
	res.redirect('/fruits');
});

// Delete all
app.delete('/fruits/all', (req, res) => {
	fruits.splice(0, fruits.length); //remove the item from the array
	res.redirect('/fruits'); //redirect back to index route
});

// Delete
app.delete('/fruits/:index', (req, res) => {
	fruits.splice(req.params.index, 1); //remove the item from the array
	res.redirect('/fruits'); //redirect back to index route
});

// Update
app.put('/fruits/:index', (req, res) => {
	// :index is the index of our fruits array that we want to change
	if (req.body.readyToEat === 'on') {
		//if checked, req.body.readyToEat is set to 'on'
		req.body.readyToEat = true;
	} else {
		//if not checked, req.body.readyToEat is undefined
		req.body.readyToEat = false;
	}
	fruits[req.params.index] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/fruits'); //redirect to the index page
});

// Edit
app.get('/fruits/:index/edit', (req, res) => {
	res.render(
		'edit.ejs', //render views/edit.ejs
		{
			//pass in an object that contains
			fruit: fruits[req.params.index], //the fruit object
			index: req.params.index //... and its index in the array
		}
	);
});

app.listen(PORT, () => {
	console.log('listening on port', PORT);
});
