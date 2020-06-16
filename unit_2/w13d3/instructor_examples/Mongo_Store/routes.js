const shopController = require('./controllers/shopController');
const usersController = require('./controllers/usersController');
const sessionsController = require('./controllers/sessionsController');

module.exports = app => {
    // Welcome route
    app.get('/', (req, res) => {
        res.render('index.ejs', {
            currentUser: req.session.currentUser
        });
    });
  
    // Party App Route
    app.get('/app', (req, res)=> {
        if(req.session.currentUser){
            res.render('app/index.ejs');
        } else {
            res.redirect('/sessions/new');
        }
    });

    app.get('/users/new', usersController.newForm);
    app.post('/users', usersController.create);

    app.get('/sessions/new', sessionsController.newForm);
    app.post('/sessions', sessionsController.create);
    app.delete('/sessions', sessionsController.destroy);

    // get the create form api
    // app.get('/shop', shopController.makeNew);
    app.get('/shop/products/', shopController.getAll);

    // create post api
    app.post('/shop/products/', shopController.create);
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