const ObjectId = require('mongodb').ObjectID;

let pokedexCol;

(async function () {
    const loadDB = require('./models');
    let db = await loadDB();
    pokedexCol = db.pokedex;
})();

module.exports = {
    async data (req, res) {
        const pokemon = await pokedexCol.find({}).toArray();
        res.send(pokemon);
    },
    async index (req, res) {
        res.render('index.ejs');
    },
    async pokedex (req, res) {
        const pokemon = await pokedexCol.find({}).toArray();
        res.render('pokedex.ejs', {
            // sends pokemon data into the pokedex.ejs page under the variable 'data'
            data: pokemon
        });
    },
    makeNew: (req, res) => {
        res.render('new.ejs');
    },
    async show (req, res) {
        const pokemon = await pokedexCol.findOne({ _id: ObjectId(req.params.index) });

        res.render('show.ejs', {
            // sends the specific pokemon data into the show.ejs page under the variable 'data '
            data: pokemon,
        });
    },
    async edit (req, res) {
        const pokemon = await pokedexCol.findOne({ _id: ObjectId(req.params.index) });
        res.render('edit.ejs', {
            // sends the specific pokemon data into the show.ejs page under the variable 'data '
            data: pokemon,
        });
    },
    async create (req, res) {
        console.log(req.body);
        // creates newPokemon object to match the data structure of the model
        let newPokemon = {
            name: req.body.name,
            img: req.body.img,
            type: req.body.type.split(','),
            stats: {
                hp: req.body.hp,
                attack: req.body.attack,
                defense: req.body.defense,
                spattack: req.body.spattack,
                spdefense: req.body.spdefense,
                speed: req.body.speed
            }
        };
        console.log(newPokemon);
        // pushes the newPokemon object into the databse
        // pokemon.push(newPokemon);
        // redirects to the pokedex
        try {
            const result = await pokedexCol.insertOne(newPokemon);

            if(result.insertedCount !== 1) {
                // Redirect to an error page.
            }
        } catch (err) {
            // Redirect to an error page.
        }
        return res.redirect('/pokemon');
    },
    async update (req, res) {
        // finds the pokemon we're editing by the index number, then sets it equal to the editPokemon object
        // pokemon[req.params.index] = editPokemon;
        try {
            const result = await pokedexCol.updateOne({
                _id: ObjectId(req.params.index)
            }, {
                $set: {
                    name: req.body.name,
                    img: req.body.img,
                    type: req.body.type.split(','),
                    stats: {
                        hp: req.body.hp,
                        attack: req.body.attack,
                        defense: req.body.defense,
                        spattack: req.body.spattack,
                        spdefense: req.body.spdefense,
                        speed: req.body.speed
                    }
                }
            });
            if(result.result.n !== 1) {
                // It was deleted meanwhile or not found, redirect to an error page
            }
        } catch(err) {
            // It was deleted meanwhile or not found, redirect to an error page
        }
        res.redirect('/pokemon/' + req.params.index);
    },
    async destroy (req, res) {
        // splices the pokemon from the 'database' based on its array index
        // pokemon.splice(req.params.index, 1);
        try {
            const result = await pokedexCol.deleteOne({ _id: ObjectId(req.params.index) });
            if(result.result.n !== 1) {
                // It was deleted meanwhile or not found, redirect to an error page
            }
        } catch(err) {
            // It was deleted meanwhile or not found, redirect to an error page
        }
        // redirects to pokedex
        res.redirect('/pokemon');
    }
};