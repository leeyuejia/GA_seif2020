const tasksRepository = require('../repositories/tasksRepository');
const httpResponseFormatter = require('../formatters/httpResponse');

module.exports = {
    async getAll (req, res) {
        const tasks = await tasksRepository.findAll();
        httpResponseFormatter.formatOkResponse(res, tasks);
    },
    async getById (req, res) {
        const task = await tasksRepository.findById(req.params.id);
        httpResponseFormatter.formatOkResponse(res, task);
    },
    async create (req, res) {
        const task = await tasksRepository.create(req.body);
        httpResponseFormatter.formatOkResponse(res, task);
    },
    async updateById  (req, res) {
        const isUpdateSuccessful = await tasksRepository.updateById(req.params.id, req.body);
        httpResponseFormatter.formatOkResponse(res, {
            isUpdateSuccessful,
        });
    },
    async deleteById (req, res) {
        const isDeleteSuccessful = await tasksRepository.deleteById(req.params.id);
        httpResponseFormatter.formatOkResponse(res, {
            isDeleteSuccessful,
        });
    }
};