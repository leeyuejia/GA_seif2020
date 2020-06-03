const { pokemonController } = require('./controllers');

module.exports = (app) => {
    app.get('/', (req, res) => res.redirect('/pokemon'));
    app.get('/pokemon', pokemonController.getAll);
    app.get('/pokemon/new', pokemonController.create);
    app.get('/pokemon/:id', pokemonController.getOne);
};