const shopController = require('./controllers/shopController');

module.exports = app => {
    app.get('/', shopController.getAll);

    app.post('/shop', shopController.create);
    app.put('/shop/:name', shopController.update);
    // Min Shan's show route
    // app.get('/:name', shopController.getOneByName);
    // Yinsheng's show route
    app.get('/shop/:name', shopController.show);
};