const logsRepository = require('../repositories/logsRepository');
const moment = require('moment');
const logsValidator = require('../validators/logsValidator');
const ValidationError = require('../exceptions/ValidationError');

module.exports = {
    async getAll (req, res) {
        const logs = await logsRepository.getAll(); // retrieved log from db
        moment.locale('de');
        logs[0].date = moment('20201001', 'YYYYMMDD');
        res.render('index', { logs });
    },
    getForm (req, res) {
        res.render('new');
    },
    create (req, res) {
        try {
            logsValidator.validate(req.body);
            res.send('ok');
        } catch (err) {
            console.log('errorMessage', err.message);
            if (err instanceof ValidationError) {
                res.send(err.message);
            } else {
                res.send('there was an error');
            }
        }

    }
};