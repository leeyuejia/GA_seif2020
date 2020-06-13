const logsRepository = require('../repositories/logsRepository');
const moment = require('moment');

const addFormattedDate = logs => logs.map(log => {
    if (log.date) log.formattedDate = moment(log.date).format('dddd, MMMM Do YYYY, h:mm:ss a');
    return log;
});

module.exports = {
    async getAll (req, res) {
        const logs = await logsRepository.getAll(); // retrieved log from db
        addFormattedDate(logs);
        res.render('logs/index', { logs });
    },
    getForm (req, res) {
        res.render('logs/new', { date: moment().format('YYYY-MM-DDTHH:mm') });
    },
    create (req, res) {
        try {
            console.log(req.body);
            res.send('ok');
        } catch (err) {
            res.send(err.message);
        }
    }
};