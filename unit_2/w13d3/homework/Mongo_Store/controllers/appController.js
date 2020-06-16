module.exports = {
    index (req, res) {
        res.render('index', { currentUser: req.session.currentUser });
    },
    app (req, res) {
        if(req.session.currentUser) {
            res.render('app/index');
        } else {
            res.redirect('/');
        }
    }
};