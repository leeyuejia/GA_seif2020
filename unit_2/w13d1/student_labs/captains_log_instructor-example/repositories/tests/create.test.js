const logsRepository = require('../logsRepository');
const { expect } = require('chai');
const db = require('../../db');

describe('logsRepository.create', () => {
    beforeAll(async () => {
        await db.connect();
    });
    afterAll(db.disconnect);

    it('should throw an error if I send in an object without a title', (done) => {
        logsRepository.create({})
            .catch(err => {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Document failed validation');
                done();
            });
    });


    it('should throw an error if I send in an object without an entry', (done) => {
        logsRepository.create({
            title: '',
        })
            .catch(err => {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Document failed validation');
                done();
            });
    });

    it('should throw an error if I send in an object without "isShipBroken"', (done) => {
        logsRepository.create({
            title: '',
            entry: '',
        })
            .catch(err => {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Document failed validation');
                done();
            });
    });

    it('should check that title is a string and throw an error if it isn\'t', (done) => {
        logsRepository.create({
            title: 123,
            entry: '',
            isShipBroken: false,
        })
            .catch(err => {
                expect(err).to.be.ok;
                expect(err.message).to.equal('Document failed validation');
                done();
            });
    });

    it('should throw an error if the date is a number', (done) => {
        logsRepository.create({
            title: 'My First Log',
            entry: 'Blah blah blah',
            isShipBroken: true,
            date: Date.now()// it should an incorrect form of date  // new Date() is a format/ Date.now() is a number
        })
        .then ((result) => {
            console.log(result)
            throw new Error ('Log creation should have failed')
        })
        .catch(err => {
            expect(err).to.be.ok;
            expect(err.message).to.equal('Document failed validation');
            done();
        });
    });
});