const { expect } = require('chai');
const tasksRepository = require('../tasksRepository');
const db = require('../../db');

describe('.create()', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should create a task with a title', async () => {
        const newTask = await tasksRepository.create({
            title: 'New Task',
        });
        expect(newTask.title).to.equal('New Task');
    });
});