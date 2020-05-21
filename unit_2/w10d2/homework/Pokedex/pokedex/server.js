require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8080
const methodOverride = require('method-override')

const data = require("./models/pokemon")
// require("./router/router.js")(app);

// set view to ejs
app.set("view engine", "ejs");
//set static files for jquery and css
app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
//ALL FUNCTION
const convertToArray = (input) => {
    let arr = [];
    input.includes(",") ? arr= input.split(",") : arr.push(input);
    return arr;
}
const indexPage = (req,res) => {
    res.render("index.ejs", {data})
}
const newPage = (req,res) => {
    let damagesKeys = Object.keys(data[0].damages)
    res.render("new.ejs", {data,damagesKeys})
}
const showPage = (req,res) => {
    let id = req.params.id;
    let dataKeys = Object.keys(data[id])
    let movesLevel = data[id].moves.level;
    res.render("show.ejs", {data,id,dataKeys,movesLevel})
}

const postPage = (req,res) => {
    //let arry = []
    // store the name into an array and loop through the array. for each el, arry.push(name:el)
    // then do a new data structure
    console.log(req.body)
    if (!Array.isArray(req.body.moves.level.name)) req.body.moves.level.name = convertToArray(req.body.moves.level.name)
    if (!Array.isArray(req.body.type)) req.body.type = convertToArray(req.body.type)
    console.log(req.body)
    data.push(req.body)
    res.redirect('/pokemon')
}

//ALL ROUTES
app.get("/pokemon", indexPage)

app.get("/pokemon/new", newPage)

app.get("/pokemon/:id", showPage)

// app.get("/pokemon/:id/edit", editPage)

app.post("/pokemon", postPage)

// app.put("/pokemon", putPage)

// app.delete("/fruits/:index", deletePage)



app.listen(port, () => {
    console.log("I am listening on port", port);
});