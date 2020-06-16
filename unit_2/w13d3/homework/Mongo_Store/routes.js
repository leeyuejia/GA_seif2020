const shopController = require('./controllers/shopController');
const usersController = require('./controllers/usersController');
const sessionsController = require('./controllers/sessionsController');
const appController = require('./controllers/appController');

module.exports = app => {
    app.get('/', appController.index);

    app.get('/sessions/new', sessionsController.newForm);
    app.post('/sessions', sessionsController.create);

    app.get('/users/new', usersController.newForm);
    app.post('/users', usersController.create);
    // get the create form api
    // app.get('/shop', shopController.makeNew);
    app.use((req, res, next) => {
        if(req.session.currentUser) {
            next();
        } else {
            return res.redirect('/');
        }
    });

    app.get('/app', appController.app);
    app.delete('/sessions', sessionsController.destroy);

    app.get('/shop/products', shopController.getAll);

    // create post api
    app.post('/shop/products', shopController.create);
    // Min Shan's show route
    app.get('/shop/products/:name', shopController.getOneByName);

    // Yinsheng's show route
    // app.get('/shop/:name', shopController.show);

    // delete route
    // app.delete('/shop/:name', shopController.destroy);

    // edit route
    // retrieve the current document in edit page
    // app.get('/shop/edit', shopController.edit);

    // update route
    app.put('/shop/products/:name', shopController.update);
};