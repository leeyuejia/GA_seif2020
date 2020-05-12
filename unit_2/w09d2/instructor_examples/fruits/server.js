const express = require('express');
const app = express();

const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not

// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

// add index route
app.get('/fruits/', (req, res) => {
    res.send(fruits);

    // render show fruits html
    //res.render('show.ejs');

    // render fruit html mixed with data
    // res.render('show.ejs', {
    // 	//second param must be an object
    // 	fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    // });
});

// // add show route
// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
// 	//res.send(fruits[req.params.indexOfFruitsArray]);

// 	res.render('show.ejs', {
// 		//second param must be an object
// 		fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
// 	});
// });

app.listen(PORT, () => {
    console.log('listening');
});
