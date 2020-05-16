const express = require('express');
const app = express();

const fruits = require('./models/fruits.js');

//tells express to try to match requests with files in the directory called 'public'
// app.use(express.static('public'));

// near the top, around other app.use() calls
// app.use(express.urlencoded({ extended: false }));

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

app.listen(3000, () => {
    console.log('listening...');
});
