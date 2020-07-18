const { expect } = require('chai');
const tasksRepository = require('../tasksRepository');
const db = require('../../db');

describe('.delete()', () => {
    let firstTaskId;
    
    beforeAll(async () => {
        await db.connect();
        const [firstTask] = await Promise.all([
            tasksRepository.create({ title: 'first task' }),
            tasksRepository.create({ title: 'second task' })
        ]);
        firstTaskId = firstTask._id;
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should be able to delete a task', async () => {
        const result = await tasksRepository.deleteById(firstTaskId);
        expect(result).to.be.true;
        const tasks = await tasksRepository.findAll();
        expect(tasks.length).to.equal(1);
    });
});