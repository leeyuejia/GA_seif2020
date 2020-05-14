const express = require('express');
const app = express();

const fruits = require('./models/fruits.js');

// app.use((req, res, next) => {
// 	req.rawBody = '';
// 	req.setEncoding('utf8');

// 	req.on('data', function(chunk) {
// 		req.rawBody += chunk;
// 	});

// 	req.on('end', function() {
// 		console.log('RAWBODY:' + req.rawBody);
// 		next();
// 	});
// });

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public'));

// near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }));

app.get('/fruits', (request, response) => {
	response.render('index.ejs', {
		allFruits: fruits
	});
});

// NEW route - put this above your show.ejs file
app.get('/fruits/new', (req, res) => {
	res.render('new.ejs');
});

// SHOW route
app.get('/fruits/:indexOfFruitsArray', (request, response) => {
	response.render('show.ejs', {
		fruit: fruits[request.params.indexOfFruitsArray]
	});
});

// Create route
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

app.listen(3000, () => {
	console.log('listening...');
});
