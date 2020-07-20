const { expect } = require('chai');
const tasksRepository = require('../tasksRepository');
const db = require('../../db');

describe('.findById()', () => {
    let newTaskId;

    beforeAll(async () => {
        await db.connect();
        const { _id } = await tasksRepository.create({ key: 'value' });
        newTaskId = _id;
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should find a task by id', async () => {
        const existingTask = await tasksRepository.findById(newTaskId);
        expect(existingTask.key).to.equal('value');
    });
});