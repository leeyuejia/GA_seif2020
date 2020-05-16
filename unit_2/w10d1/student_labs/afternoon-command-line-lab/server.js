// dependencies
const express = require('express');
const app     = express();

// port
const port = 3000;

// middleware
// ?
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// data
const dates = [
    { name: 'Bangor', created_at: Date.now() },
    { name: 'San Jose', created_at: Date.now() },
    { name: 'Bozeman', created_at: Date.now() }
];

// get route
app.get('/dates', (req, res) => {
    res.send(dates);
});

// post route
app.post('/dates', (req, res) => {
    console.log('req.body is: ', req.body);
    if (!req.body.name) { req.body.name = 'NO DATA'; }
    req.body.created_at = Date.now();
    dates.push(req.body);
    console.log('all the dates data: ', dates);
    res.redirect('/dates');
});

app.post('/products', (req, res) => {
    console.log('req.body is: ', req.body);
    res.redirect('/dates');
});

app.listen(port, () => console.log('Running on port: ', port));
