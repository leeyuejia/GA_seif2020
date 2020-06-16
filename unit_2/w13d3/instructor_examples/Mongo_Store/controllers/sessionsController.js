const userRepository = require('../repositories/usersRepository');
const bcrypt = require('bcrypt');

module.exports = {
    async create (req, res) {
        const foundUser = await userRepository.find(req.body.username);
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            req.session.currentUser = foundUser;
            res.redirect('/');
        } else {
            res.send('<a href="/">wrong password</a>');
        }
    },

    newForm (req, res) {
        return res.render('sessions/new.ejs');
    },

    destroy (req, res) {
        return req.session.destroy(()=>{
            res.redirect('/');
        });
    }

};