const shopController = require('./controllers/shopController');

module.exports = app => {
    app.get('/', shopController.getAll);
    app.get('/shop/:name', shopController.show);
    app.post('/shop', shopController.create);
    app.put('/shop/:name', shopController.update);
};