// Routes
module.exports = (app) => {
    const animalsController = require('../controllers/animals');
    app.use('/animals', animalsController);
}
