const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const pokemon = require('./models/pokemon');

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
