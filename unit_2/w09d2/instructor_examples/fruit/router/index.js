const { fruits, animals } = require('../controllers');

module.exports = (app) => {
    app.get('/fruits', fruits.sendFruits);
    app.get('/fruits/:id', fruits.displayFruit);
    app.get('/fruits/:id/edit', fruits.showForm);
    app.get('/animals', animals.sendAnimals);
};