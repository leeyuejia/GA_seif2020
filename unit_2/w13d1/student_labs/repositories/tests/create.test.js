const logsRepository = require('../logsRepository');
const { expect } = require('chai');
const db = require('../../db');

describe('logsRepository.create', () => {
    beforeAll(async () => {
        await db.connect();
    });
    afterAll(db.disconnect);

    it('should pass', () => {
        
    });
});