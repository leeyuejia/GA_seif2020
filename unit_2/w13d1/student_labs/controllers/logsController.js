const logsRepository = require('../repositories/logsRepository');
const logsValidator = require('../validators/logsValidator');
const ValidationError = require('../exceptions/ValidationError');

module.exports = {
    async getAll (req, res) {
        const logs = await logsRepository.getAll(); // retrieved log from db
        res.render('logs/index', { logs });
    },
    getForm (req, res) {
        res.render('logs/new');
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