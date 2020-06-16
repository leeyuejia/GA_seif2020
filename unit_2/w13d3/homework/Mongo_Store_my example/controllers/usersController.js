const usersRepository = require('../repositories/usersRepository');
const {validate} = require('../validator/usersValidator');

module.exports = {
    async create(req,res) {
        try {
            validate(req.body) // validate the data to data schema
            console.log(req.body)
           await usersRepository.create(req.body) // create username and password
           res.redirect('/');
        } catch (err) {
            res.render('errors/404', {err})
        }
    },
    async newForm(req,res) {
        res.render('users/new')
    }
}