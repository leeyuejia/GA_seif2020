const express = require('express');
const app = express();

const fruits = require('./models/fruits.js');

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public'));

// near the top, around other app.use() calls
// 1. request.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false }));

// 2. middleware
app.use((req, res, next) => {
    console.log('Middleware 2');
    next();
});

// INDEX route - show all the fruits
app.get('/fruits', (req, res) => {
    res.render('index.ejs', { allFruits: fruits });
});


// NEW route - put this above your show.ejs file
app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
});

// SHOW route
app.get('/fruits/:index', (req, res) => {
    res.render('show.ejs', { fruit: fruits[req.params.index] });
});

app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ // if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { // if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits');
});

app.listen(3000, () => {
    console.log('listening...');
});
