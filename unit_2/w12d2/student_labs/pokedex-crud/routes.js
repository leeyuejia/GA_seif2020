const { pokemonController } = require('./controllers');

module.exports = (app) => {
    app.get('/', (req, res) => res.redirect('/pokemon'));
    app.get('/pokemon', pokemonController.getAll);
};