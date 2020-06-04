const { pokemonController } = require('./controllers');
const httpResponseFormatter = require('./formatters/httpResponseFormatter');

const pokemonRepository = require('./repositories/pokemonRepository');

module.exports = (app) => {
    app.get('/', (req, res) => res.redirect('/pokemon'));
    app.get('/pokemon', pokemonController.getAll);
    app.get('/pokemon/new', pokemonController.create);
    app.get('/pokemon/:id', pokemonController.getOne);
    app.get('/api/pokemon', async (req, res) => {

        res.json({
            status: 'ok',
            data: await pokemonRepository.getAll(),
        })
        // httpResponseFormatter.formatOkResponse(req, res);
    });
};