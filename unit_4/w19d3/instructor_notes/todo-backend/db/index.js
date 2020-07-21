const dbType = process.env.NODE_ENV === 'test' ? 'memory' : 'default';
const db = require(`./${dbType}`);

module.exports = db;