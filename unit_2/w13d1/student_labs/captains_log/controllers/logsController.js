const logsRepository = require('../repositories/logsRepository')
const moment = require('moment');
const { ReplSet } = require('mongodb');

module.exports = {
    newPage (req,res) {
        res.render('new.ejs')
    },
    async createPost (req,res) { // need to check creation
        console.log(req.body)
        console.log('the type of date is:' + typeof req.body.date)
        console.log('the type of isShipBroken is:' + typeof req.body.isShipBroken)

        req.body.isShipBroken = (req.body.isShipBroken === 'true') ? true : false; 
        req.body.date = moment(req.body.date).format('dddd, MMMM Do YYYY, kk:mm:ss')
        data = req.body
        title = req.body.title
        console.log(title)
        console.log(typeof req.body.date)
        // const result = await logsRepository.create(data)
        // .then(result => {
        //     console.log(result)
        //     res.redirect(`/logs/${title}`)
        // }).catch(err => {
        //     res.send('there is something wrong:' + err.message)
        // })

        try{
            console.log('the req.body is:' + JSON.stringify(req.body))
            await logsRepository.create(data)
            return res.redirect(`/logs/${title}`)
        } catch(err) {
            return res.send('there is something wrong:' + err.message)
        }
    },
    indexPage (req,res) {
        res.render('index.ejs',)
    },
    async showPage (req,res) {
        const title = req.params.title
        console.log(title)
        try {
            const result = await logsRepository.findOneByTitle(title)
            res.render('show.ejs',{entry:result})
        } catch(err){
            return res.send(err.message)
        }
    },
    async editPage (req,res) {
        try {
            const title = req.params.title
            const infoToEdit = await logsRepository.findOneByTitle(title)
            res.render('edit.ejs', {infoToEdit})
        } catch (err) {
            return res.send(err.message)
        }
    },
    async putPage (req, res) {
        const title = req.body.title
        req.body.isShipBroken = (req.body.isShipBroken === 'true') ? true : false; 
        req.body.date = moment(req.body.date).format('dddd, MMMM Do YYYY, kk:mm:ss')
        req.body.updatedAt = moment(req.body.updatedAt).format('dddd, MMMM Do YYYY, kk:mm:ss')
        console.log('updating this: ' + req.body.updatedAt)
        const infoToUpdate = {
            'title' : req.body.title,
            'entry' : req.body.entry,
            'isShipBroken' : req.body.isShipBroken,
            'updatedAt' : req.body.updatedAt
        }
        try {
            const updateinfo = await logsRepository.editlog(title, infoToUpdate)
            res.redirect(`/logs/${req.body.title}`)
        }
        catch (err) {
            return res.send('this is putPage error' + err.message)
        }
    }
}