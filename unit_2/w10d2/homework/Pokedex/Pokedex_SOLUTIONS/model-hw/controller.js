// database
const pokemon = require('./models/pokemon.js');

module.exports = {
    data: (req, res) => {
        res.send(pokemon);
    },
    index: (req, res) => {
        res.render('index.ejs');
    },
    pokedex: (req, res) => {
        res.render('pokedex.ejs', {
            // sends pokemon data into the pokedex.ejs page under the variable 'data'
            data: pokemon
        });
    },
    makeNew: (req, res) => {
        res.render('new.ejs');
    },
    show: (req, res) => {
        res.render('show.ejs', {
            // sends the specific pokemon data into the show.ejs page under the variable 'data '
            data: pokemon[req.params.index],
            // sends the index of the pokemon into the show.ejs page under the variable 'index'
            index: req.params.index
        });
    },
    edit: (req, res) => {
        res.render('edit.ejs', {
            // sends the specific pokemon data into the show.ejs page under the variable 'data '
            data: pokemon[req.params.index],
            // sends the index of the pokemon into the show.ejs page under the variable 'index'
            index: req.params.index
        });
    },
    create: (req, res) => {
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
        pokemon.push(newPokemon);
        // redirects to the pokedex
        res.redirect('/pokemon');
    },
    update: (req, res) => {
        console.log(req.body);
        // creates editPokemon object to match the data structure of the model
        let editPokemon = {
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
        console.log(editPokemon);
        // finds the pokemon we're editing by the index number, then sets it equal to the editPokemon object
        pokemon[req.params.index] = editPokemon;
        res.redirect('/pokemon/' + req.params.index);
    },
    destroy: (req, res) => {
        // splices the pokemon from the 'database' based on its array index
        pokemon.splice(req.params.index, 1);
        // redirects to pokedex
        res.redirect('/pokemon');
    }
};