const shopController = require('./controllers/shopController');

module.exports = app => {
    app.get('/', shopController.getAll);

    // get the create form api
    // app.get('/shop', shopController.makeNew);

    // create post api
    app.post('/shop', shopController.create);
    // Min Shan's show route
    app.get('/:name', shopController.getOneByName);

    // Yinsheng's show route
    // app.get('/shop/:name', shopController.show);

    // delete route
    // app.delete('/shop/:name', shopController.destroy);

    // edit route
    // retrieve the current document in edit page
    // app.get('/shop/edit', shopController.edit);

    // update route
    app.put('/shop/:name', shopController.update);
};