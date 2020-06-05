const { pokemonController } = require('./controllers');
const pokemonRepository = require('./repositories/pokemonRepository')
module.exports = (app) => {
    app.get('/', (req, res) => res.redirect('/pokemon'));
    app.get('/pokemon', pokemonController.getAll);
    app.get('/pokemon/new', pokemonController.create);
    app.get('/pokoemon/:id', pokemonController.getOne);
    app.get('/api/pokemon', async (req,res)=> {
        res.json({
            status:'ok',
            data: await pokemonRepository.getAll()
        })
    })
};