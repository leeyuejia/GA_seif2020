const logsRepository = require('../repositories/logsRepository')

module.exports = {
    newPage (req,res) {
        res.render('new.ejs')
    },
    createPage (req,res) {
        console.log(req.body)
        data = req.body
        res.redirect('/logs', {data})
    },
    indexPage (req,res) {
        res.send('this is index page')
    },
    showPage (req,res) {
        res.send('this is show page')
    },
    // editPage (req,res) {
    //     res.send('this is editing page')
    // },
    // putPage (req, res) {
    //     res.send('this is putPage' + req.body)
    // }
}