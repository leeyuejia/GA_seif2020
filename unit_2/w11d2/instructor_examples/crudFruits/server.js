const express = require('express');
const mongoose = require('mongoose');
const Fruit = require('./models/Fruit');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

//Connect to database
//mongodb://localhost:27017/fruitscrud
//mongodb+srv://henry:<password>@cluster0-dqzcz.mongodb.net/fruitscrud?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost:27017/fruitscrud', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

// Index route
app.get('/fruits', (req, res) => {
	Fruit.find({}, (err, allFruits) => {
		if (err) console.error(err.message);
		else {
			res.render('index.ejs', {
				fruits: allFruits
			});
		}
	});
});

// API Index route
app.get('/api/fruits', (req, res) => {
	Fruit.find({}, (err, allFruits) => {
		if (err) console.error(err.message);
		else {
			res.json(allFruits);
		}
	});
});

// New route
app.get('/fruits/new', (req, res) => {
	res.render('new.ejs');
});

// Show route
app.get('/fruits/:id', (req, res) => {
	Fruit.findById(req.params.id, (err, foundFruit) => {
		if (err) res.send(err.message);

		res.render('show.ejs', {
			fruit: foundFruit
		});
	});
});

// Create route
app.post('/fruits/', (req, res) => {
	if (req.body.readyToEat === 'on') {
		//if checked, req.body.readyToEat is set to 'on'
		req.body.readyToEat = true;
	} else {
		//if not checked, req.body.readyToEat is undefined
		req.body.readyToEat = false;
	}

	Fruit.create(req.body, (err, createdFruit) => {
		if (err) res.send(err.message);

		res.redirect('/fruits');
	});
});

// Server listening
app.listen(3000, () => {
	console.log('listening');
});
