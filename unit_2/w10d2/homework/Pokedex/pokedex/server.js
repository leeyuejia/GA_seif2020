require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8080


const data = require("./models/pokemon")
// require("./router/router.js")(app);

// set view to ejs
app.set("view engine", "ejs");
//set static files for jquery and css
app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ALL FUNCTION

const indexPage = (req,res) => {
    res.render("index.ejs", {data})
}
app.get("/pokemon", indexPage)

app.listen(port, () => {
    console.log("I am listening on port", port);
});