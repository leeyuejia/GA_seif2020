const db = require('../db');
const { ObjectId } = require('mongodb');

const doFindMany = condition => db.tasks.find(condition).toArray();

module.exports = {
    async create (taskDto) {
        const { ops: [task] } = await db.tasks.insertOne(taskDto);
        return task;
    },
    async updateById (id, newData) {
        const { result } = await db.tasks.updateOne(
            { _id: ObjectId(id) },
            { $set: newData }
        );
        return !!result.nModified;
    },
    async findById (id) {
        const [result] = await doFindMany({ _id: ObjectId(id) });
        return result;
    },
    findAll () {
        return doFindMany({});
    },
    async deleteById (id) {
        const { result } = await db.tasks.deleteOne({
            _id: ObjectId(id),
        });
        return !!result.ok;
    }
};