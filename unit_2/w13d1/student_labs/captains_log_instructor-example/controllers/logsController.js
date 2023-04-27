const logsRepository = require('../repositories/logsRepository');
const moment = require('moment');
const ajvLogsValidator = require('../validators/ajvLogsValidator');
const httpResponseFormatter = require('../formatters/httpResponseFormatter');

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
    async create (req, res) {
        try {
            req.body.date = moment(req.body.date).toISOString();
            ajvLogsValidator.logs.validate(req.body);
            const log = await logsRepository.create(req.body);
            httpResponseFormatter.formatOkResponse(res, log);
        } catch (err) {
            console.log('error', err);
            httpResponseFormatter.formatErrorResponse(res, err);
        }
    }
};