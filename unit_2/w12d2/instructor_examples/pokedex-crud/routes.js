const { data, index, pokedex, makeNew, show, edit, create, update, destroy } = require('./controller');

module.exports = (app) => {
    // ==================== GET ROUTES ====================
    // seed route
    // app.get('/seed', seed);
    // const pokedex = db.collection('pokedex');

    // data route
    // app.get('/pokedata', async (req, res) => {
    //     let pokemons = await pokedex.find({}).limit(10).toArray();
    //     res.send(pokemons);
    // });

    app.get('/pokedata', data);

    // index route
    app.get('/', index);

    // pokedex route
    app.get('/pokemon', pokedex);

    // new route
    app.get('/pokemon/new', makeNew);

    // show route
    app.get('/pokemon/:index', show);

    // edit route
    app.get('/pokemon/:index/edit', edit);

    // ==================== ACTION ROUTES ====================
    // post route
    app.post('/pokemon', create);

    // put route
    app.put('/pokemon/:index', update);

    // delete route
    app.delete('/pokemon/:index', destroy);
};