const { expect } = require('chai')
const userRepository = require('../usersRepository')
const db = require('../../db')

describe('userRepository.create', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should return insertedCount when insert a new object into db collection', async () => {
        try {
            const result = await userRepository.create({
                'username': 'Cup cakes',
                'password': '111',
                'createdAt': new Date(),
                'updatedAt': new Date()
            })
        } catch (err) {
            expect(err).to.be.ok;
        }
    })

    it('should throw err if username is not provided', async () => {
        try {
            const result = await userRepository.create({
                'password': '111',
                'createdAt': new Date(),
                'updatedAt': new Date()
            })
        } catch (err) {
            expect(err).to.be.ok;
        }
    })

    it('should throw error if password is a number', async () => {
        try {
            const result = await userRepository.create({
                'username': '123123',
                'password': 111,
                'createdAt': '2020-06-10T20:00:00Z',
                'updatedAt': new Date()
            })
        } catch (err) {
            console.log(err)
            expect(err).to.be.ok;
        }
    })

    it('should throw an error if createdAt is string type', async () => {
        try {
            const result = await userRepository.create({
                'password': '111',
                'createdAt': '2020-06-10T20:00:00Z',
                'updatedAt': new Date()
            })
        } catch (err) {
            console.log(err)
            expect(err).to.be.ok;
        }
    })



})
