const { data, index, pokedex, makeNew, show, edit, create, update, destroy } = require('./controller');

module.exports = (app) => {
    // ==================== GET ROUTES ====================
    // data route
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