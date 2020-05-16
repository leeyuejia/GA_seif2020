const { index, init, show, create } = require('./controller');

module.exports = (app) => {
    app.get('/bakedgoods', index);
    app.get('/bakedgoods/new', init);
    app.get('/bakedgoods/:id', show);
    app.post('/bakedgoods', create);
};