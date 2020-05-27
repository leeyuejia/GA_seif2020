const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const fruitsController = require('./controllers/fruits.js');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Use Controllers and Routes
app.use('/fruits', fruitsController);

//Connect to database
//mongodb://localhost:27017/fruitscrud
//mongodb+srv://henry:<password>@cluster0-dqzcz.mongodb.net/fruitscrud?retryWrites=true&w=majority
mongoose.connect(
	'mongodb+srv://henry:henry@cluster0-dqzcz.mongodb.net/fruitscrud?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true
	}
);
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

// Server listening
app.listen(3000, () => {
	console.log('listening');
});
