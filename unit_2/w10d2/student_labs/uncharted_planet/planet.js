require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8080
const methodOverride = require('method-override');

let data = [];


app.set("view engine", "ejs");

///ALL MIDDLEWARE
//set static files for jquery and css
app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get("/planets", (req,res)=> {
    console.log(data[0])
    let dataKeys = Object.keys(data[0]);
    console.log(dataKeys)
    res.render("index.ejs", {data, dataKeys})
})

app.get("/planets/new", (req,res)=> {
    res.render("new.ejs")
})

app.post("/planets", (req,res)=> {
    data.push(req.body)
    res.redirect('/planets');
})

app.delete('/planets/:index', (req,res)=> {
    data.splice(req.params.index, 1);
    res.redirect('/planets');
})

app.listen(port, () => {
    console.log("I am listening on port", port);
});