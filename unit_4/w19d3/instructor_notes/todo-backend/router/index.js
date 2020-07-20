const tasksController = require('../controllers/tasksController');

module.exports = app => {
    app.get('/tasks', tasksController.getAll);
    app.get('/tasks/:id', tasksController.getById);
    app.post('/tasks', tasksController.create);
    app.put('/tasks/:id', tasksController.updateById);
    app.delete('/tasks/:id', tasksController.deleteById);
};