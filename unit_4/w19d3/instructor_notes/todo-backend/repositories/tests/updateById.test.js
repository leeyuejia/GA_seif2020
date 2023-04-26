const { expect } = require('chai');
const tasksRepository = require('../tasksRepository');
const db = require('../../db');

describe('.updateById()', () => {
    let newTaskId;

    beforeAll(async () => {
        await db.connect();
        const { _id } = await tasksRepository.create({ key: 'value' });
        newTaskId = _id;
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should update a task by id', async () => {
        const isUpdated = await tasksRepository.updateById(newTaskId, { key: 'banana' });
        expect(isUpdated).to.be.true;
    });
});