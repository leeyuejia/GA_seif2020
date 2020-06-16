const userRepository = require('../repositories/usersRepository');
const validator = require('../validator/usersValidator');
const bcrypt = require('bcrypt');

module.exports = {
    async create (req, res) {
        try {
            req.body.password = bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10));
            validator.users.validate(req.body);
            await userRepository.create(req.body);
            return res.redirect('/');
        } catch(err) {
            return res.status(500).json({
                message: err.message
            });
        }
    },

    newForm (req, res) {
        return res.render('users/new.ejs');
    }
};