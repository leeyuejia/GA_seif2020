const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const pokemon = require('./models/pokemon');

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', { pokemon });
});

app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
