const userRepository = require('../repositories/usersRepository');
const validator = require('../validator/usersValidator');
const bcrypt = require('bcrypt');

module.exports = {
    async create (req, res) {
        try {
            console.log(req.body);
            req.body.password = bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10));
            validator.users.validate(req.body);
            req.body.createdAt = new Date(req.body.createdAt);
            req.body.updatedAt = new Date(req.body.updatedAt);

            await userRepository.create(req.body);
            res.redirect('/');
        } catch(err) {
            res.status(500).json({
                message: err.message
            });
        }
    },

    newForm (req, res) {
        return res.render('users/new.ejs');
    }
};