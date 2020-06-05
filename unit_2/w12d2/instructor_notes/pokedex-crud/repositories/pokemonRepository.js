const db = require('../db');

module.exports = {
    getAll () {
        return db.pokemon.find().toArray();
    },
    async create (data) {
        const { ops } = await db.pokemon.insertOne(data);
        const [newPokemon] = ops;
        return newPokemon;
    },
    async update (id, data) {
        const pokemon = await db.pokemon.updateOne(
            { id },
            { $set: data }
        );
        console.log(pokemon);
        const { result } = pokemon;
        return result.n;
    },
    async getOne (options) {
        const pokemon = await db.pokemon.findOne(options);
        if (!pokemon) throw new Error('That pokemon does not exist!');
        return pokemon;
    },
    async delete (id) {
        const { result } = await db.pokemon.deleteOne({ id });
        if (!result.n) throw new Error(`Pokemon with id ${id} does not exist!`);
        return result.n;
    }
};