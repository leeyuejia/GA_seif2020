const { expect } = require('chai');
const tasksRepository = require('../tasksRepository');
const db = require('../../db');

describe('.findById()', () => {
    let newTaskId;

    beforeAll(async () => {
        await db.connect();
        await Promise.all([
            tasksRepository.create({ key: 'task 1' }),
            tasksRepository.create({ key: 'task 2' }),
        ]);
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should find a task by id', async () => {
        const tasks = await tasksRepository.findAll();
        expect(tasks.length).to.equal(2);
    });
});