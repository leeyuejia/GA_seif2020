// to fetch a session relate to the user

// the method
// create the session (sign in)
// destroy the session (logg out)

const usersRepository = require('../repositories/usersRepository');
const bcrypt = require('bcrypt')
module.exports = {
    newForm(req,res) {
       return res.render('sessions/new')
    },
    async create(req, res) {
        try {
             const user = await usersRepository.find(req.body.username)
             if(bcrypt.compareSync(req.body.password, user.password)) {
                req.session.currentUser = user;
                return res.redirect('/');
            } else {
                throw new Error();
            }
        } catch(err) {
            return res.send(('<a href="/">USERNAME or PASSWORD are wrong</a>'))
        }
    },
    destroy(req,res) {
        return req.session.destroy(() => { // destroy the session
            res.redirect('/');
        })
    }
}