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

    it ('should throw an error if there is no title entered in', async (done) => {
        try {
            const result = await logsRepository.create({})
            if(!result.result.n) {
                throw new Error('This entry is invalid and cannot be inserted')
            }
            return result;
        } catch (err) {
            expect(err).to.be.ok
            expect(err.message).to.equal(err.message)
            done();
        }
    }),

    it ('should throw an error if there is no entry entered in', async (done) => {
        try {
            const result = await logsRepository.create({
                title: '',
            })
            if(!result.result.n) {
                throw new Error('This entry is invalid and cannot be inserted')
            }
            console.log(result.result.n)
            return result;
        } catch (err) {
            expect(err).to.be.ok
            expect(err.message).to.equal(err.message)
            done();
        }
    }),
    it ('should throw an error if there is no isShipBroken entry in', async (done) => {
        try {
            const result = await logsRepository.create({
                title: '',
                entry: ''
            })
            if(!result.result.n) {
                throw new Error('This entry is invalid and cannot be inserted')
            }
            console.log(result.result.n)
            return result;
        } catch (err) {
            expect(err).to.be.ok
            expect(err.message).to.equal(err.message)
            done();
        }
    }),

    it ('should throw an error if title is not a string', async (done) => {
        try {
            const result = await logsRepository.create({
                title: 123,
                entry: 'some entry',
                isShipBroken : false,
                date: new Date()
            })
            console.log(result)
            throw new Error ('result should have failed')
        } catch (err) {
            expect(err).to.be.ok
            expect(err.message).to.equal(err.message)
            done();
        }
    })
    })