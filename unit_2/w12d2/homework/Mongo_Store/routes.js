const shopController = require('./controllers/shopController');

module.exports = app => {
    app.get('/', shopController.getAll);
    app.get('/:name', shopController.getOneByName);
};