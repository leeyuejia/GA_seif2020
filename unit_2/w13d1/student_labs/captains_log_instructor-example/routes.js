const logsController = require('./controllers/logsController');

module.exports = app => {
    app.get('/', logsController.getAll);
    app.get('/new', logsController.getForm);
    app.post('/new', logsController.create);
};