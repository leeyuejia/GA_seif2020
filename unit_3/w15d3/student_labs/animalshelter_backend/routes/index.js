module.exports = (app) => {

    const animalsController = require('../controllers/animals');
    app.use('/animals', animalsController)
    
    app.get('*', (req,res) => {
        res.status(404).json('sorry, there is no such page to be found')
    })
}