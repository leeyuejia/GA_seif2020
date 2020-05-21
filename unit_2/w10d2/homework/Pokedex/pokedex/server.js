require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8080
const methodOverride = require('method-override')

const data = require("./models/pokemon")
const dataKeys = Object.keys(data)
// require("./router/router.js")(app);

// set view to ejs
app.set("view engine", "ejs");
//set static files for jquery and css
app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
//ALL FUNCTION

const indexPage = (req,res) => {
    res.render("index.ejs", {data})
}
const newPage = (req,res) => {
    res.render("new.ejs", {data, dataKeys})
}

//ALL ROUTES
app.get("/pokemon", indexPage)

app.get("/pokemon/new", newPage)

// app.get("/pokemon:id", showPage)

// app.get("/pokemon/:id/edit", editPage)

// app.post("/pokemon", postPage)

// app.put("/pokemon", putPage)

// app.delete("/fruits/:index", deletePage)



app.listen(port, () => {
    console.log("I am listening on port", port);
});