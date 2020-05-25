require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8080
const methodOverride = require('method-override')
// const data = require("./models/pokemon")


// set view to ejs
app.set("view engine", "ejs");
//set static files for jquery and css
app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
require("./router/router.js")(app);

app.listen(port, () => {
    console.log("I am listening on port", port);
});

////////////////////////////   IGNORE BELOW ///////////////////////

////////////////////////////////////////////////
///////////////  ALL FUNCTION   ////////////////
////////////////////////////////////////////////
// const convertToArray = (input) => {
//     let arr = [];
//     input.includes(",") ? arr= input.split(",") : arr.push(input);
//     return arr;
// }
// const addKeyToArray = (arr) => {
//     let arrayOfObject = [];
//     for (const el of arr) {
//         arrayOfObject.push({"name": el})
//     }
//     return arrayOfObject;
// }
// const convertObjToNumber = (obj)=> {
//     for (const pro in obj) {
//         obj[pro] = parseInt(obj[pro])
//     } return obj;
// };

// ////////////////////////////////////////////////
// ///////////////  CONTROLLERS    ////////////////
// ////////////////////////////////////////////////
// const indexPage = (req,res) => {
//     res.render("index.ejs", {data})
// }
// const newPage = (req,res) => {
//     let damagesKeys = Object.keys(data[0].damages)
//     let statsKeys = Object.keys(data[0].stats)
//     res.render("new.ejs", {data,damagesKeys,statsKeys})
// }
// const showPage = (req,res) => {
//     let id = req.params.id;
//     let dataKeys = Object.keys(data[id])
//     let movesLevel = data[id].moves.level;
//     console.log(dataKeys)
//     res.render("show.ejs", {data,id,dataKeys,movesLevel})
// }

// const postPage = (req,res) => {
//     if (!Array.isArray(req.body.moves)) req.body.moves = convertToArray(req.body.moves);
//     if (!Array.isArray(req.body.type)) req.body.type = convertToArray(req.body.type)
//     let movesName = req.body.moves
//     let newPokemon = 
//         {name: req.body.name,
//         img: req.body.img,
//         type: req.body.type,
//         moves: {
//             level: addKeyToArray(movesName)
//         },
//         damages: req.body.damages,
//         stats: convertObjToNumber(req.body.stats)
//     }
//     data.push(newPokemon)
//     res.redirect('/pokemon')
// }

// const editPage = (req, res) => {
//     let id = req.params.id
//     let editPokemon = data[id]
//     let movesName = editPokemon.moves.level;
//     //movesName is an array of objects
//     res.render('edit.ejs',{id,editPokemon,movesName})
// };

// const putPage = (req,res) => {
//     if (!Array.isArray(req.body.moves)) req.body.moves = convertToArray(req.body.moves);
//     if (!Array.isArray(req.body.type)) req.body.type = convertToArray(req.body.type)
//     let editedPokemon = {
//         name: req.body.name,
//         img: req.body.img,
//         type: req.body.type,
//         moves: {
//             level: addKeyToArray(req.body.moves)
//         },
//         stats: convertObjToNumber(req.body.stats),
//         damages: data[req.params.id].damages
//     }
//     data[req.params.id] = editedPokemon
//     console.log(editedPokemon)
//     res.redirect(`/pokemon/${req.params.id}`)
// }

// const deleteAll = (req,res) => {
//     data.splice(0, data.length)
//     res.redirect("/pokemon")
// }

// const deletePage = (req,res) => {
//     data.splice(req.params.id, 1)
//     res.redirect("/pokemon")
//     return data;
// }

// ////////////////////////////////////////////////
// ///////////////  ALL ROUTE  ////////////////
// ////////////////////////////////////////////////
// app.get("/pokemon", indexPage)
// app.get("/pokemon/new", newPage)
// app.get("/pokemon/:id", showPage)
// app.get("/pokemon/:id/edit", editPage)
// app.post("/pokemon", postPage)
// app.put("/pokemon/:id", putPage)
// app.delete("/pokemon/all", deleteAll)
// app.delete("/pokemon/:id", deletePage)

