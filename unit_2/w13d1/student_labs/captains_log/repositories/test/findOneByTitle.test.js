const logsRepository = require('../logsRepository');
const { expect } = require('chai');
const db = require('../../db');

describe('logsRepository.create', () => {
    beforeAll(async () => {
        await db.connect();
    });
    afterAll(async () => {
        await db.disconnect()
    });

    it ('throws an error if title is not found', async () => {
        try {
            const result = await logsRepository.findOneByTitle({'title':'first titl'})
            expect(result).to.be.an('object')
            throw new Error ('test should be failed as there is no such title')
        } catch (err) {
            console.log(err.message)
            expect(err.message).to.equal('logs with such title does not exist')
        }
    }),
    it ('returns an object if title is found', async () => {
        try {
            const result = await logsRepository.findOneByTitle({'title':'first title'})
            expect(result).to.be.an('object')
            throw new Error ('test should be failed as there is no such title')
        } catch (err) {
            console.log(err.message)
            expect(err.message).to.equal('logs with such title does not exist')
        }
    })

})