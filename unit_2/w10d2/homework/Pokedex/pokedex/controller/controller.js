const data = require("../models/pokemon")

////////////////////////////////////////////////
///////////////  ALL FUNCTION   ////////////////
////////////////////////////////////////////////

const convertToArray = (input) => {
    let arr = [];
    input.includes(",") ? arr = input.split(",") : arr.push(input);
    return arr;
}
const addKeyToArray = (arr) => {
    let arrayOfObject = [];
    for (const el of arr) {
        arrayOfObject.push({ "name": el })
    }
    return arrayOfObject;
}
const convertObjToNumber = (obj) => {
    for (const pro in obj) {
        obj[pro] = parseInt(obj[pro])
    } return obj;
};

////////////////////////////////////////////////
///////////////  CONTROLLERS    ////////////////
////////////////////////////////////////////////

const controller = {
    indexPage: (req, res) => {
        res.render("index.ejs", { data })
    },
    newPage: (req, res) => {
        let damagesKeys = Object.keys(data[0].damages)
        let statsKeys = Object.keys(data[0].stats)
        res.render("new.ejs", { data, damagesKeys, statsKeys })
    },
    showPage: (req, res) => {
        let id = req.params.id;
        let dataKeys = Object.keys(data[id])
        let movesLevel = data[id].moves.level;
        console.log(dataKeys)
        res.render("show.ejs", { data, id, dataKeys, movesLevel })
    },
    postPage: (req, res) => {
        if (!Array.isArray(req.body.moves)) req.body.moves = convertToArray(req.body.moves);
        if (!Array.isArray(req.body.type)) req.body.type = convertToArray(req.body.type)
        let movesName = req.body.moves
        let newPokemon =
        {
            name: req.body.name,
            img: req.body.img,
            type: req.body.type,
            moves: {
                level: addKeyToArray(movesName)
            },
            damages: req.body.damages,
            stats: convertObjToNumber(req.body.stats)
        }
        data.push(newPokemon)
        res.redirect('/pokemon')
    },
    editPage: (req, res) => {
        let id = req.params.id
        let editPokemon = data[id]
        let movesName = editPokemon.moves.level;
        //movesName is an array of objects
        res.render('edit.ejs', { id, editPokemon, movesName })
    },
    putPage: (req, res) => {
        if (!Array.isArray(req.body.moves)) req.body.moves = convertToArray(req.body.moves);
        if (!Array.isArray(req.body.type)) req.body.type = convertToArray(req.body.type)
        let editedPokemon = {
            name: req.body.name,
            img: req.body.img,
            type: req.body.type,
            moves: {
                level: addKeyToArray(req.body.moves)
            },
            stats: convertObjToNumber(req.body.stats),
            damages: data[req.params.id].damages
        }
        data[req.params.id] = editedPokemon
        console.log(editedPokemon)
        res.redirect(`/pokemon/${req.params.id}`)
    },
    deleteAll: (req, res) => {
        data.splice(0, data.length)
        res.redirect("/pokemon")
    },
    deletePage: (req, res) => {
        data.splice(req.params.id, 1)
        res.redirect("/pokemon")
        return data;
    }
};

module.exports = controller;