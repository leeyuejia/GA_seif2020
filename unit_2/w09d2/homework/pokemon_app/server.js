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
    const index = parseInt(req.params.id);
    if (!isNaN(index) && index >= 0 && index < pokemon.length) {
        res.render('show.ejs', { pokemon: pokemon[index] });
    } else {
        res.send(`Your input is not valid, it should be equal to or larger than 0 and less than ${pokemon.length}`);
    }
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
