const shopController = require('./controllers/shopController');

module.exports = app => {
    app.get('/', (req, res) => {
        res.redirect('/products');
    });


    app.get('/products', shopController.getAll);

    // get the create form api
    // app.get('/shop', shopController.makeNew);

    // create post api
    app.post('/products', shopController.create);
    // Min Shan's show route
    app.get('/products/:productId', shopController.getOneByName);

    // Yinsheng's show route
    // app.get('/shop/:name', shopController.show);

    // delete route
    app.delete('/products/:productId', shopController.destroy);

    // edit route
    // retrieve the current document in edit page
    // app.get('/shop/edit', shopController.edit);

    // update route
    // app.patch('/productId/:productId', shopController.update);
};