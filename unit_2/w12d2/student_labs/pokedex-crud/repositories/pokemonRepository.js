const db = require('../db');

module.exports = {
    getAll() {
        return db.pokemon.find().toArray();
    },
    async create (data) {
        const{ops} = await db.pokemon.insertOne(data);
        const [newPokemon] = ops;
        return newPokemon;
    }
}