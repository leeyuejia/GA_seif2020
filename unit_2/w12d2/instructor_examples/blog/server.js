const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");

//...farther down the page
mongoose.connect("mongodb://localhost:27017/blog");

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//middleware
// allows us to use put and delete methods
app.use(methodOverride("_method"));
//body parser
app.use(express.urlencoded({ extended: false }));

const authorsController = require("./controllers/authors");
const articlesController = require("./controllers/articles");
const fruitsController = require("./controllers/fruits");

// Use contollers
app.use("/authors", authorsController);
app.use("/articles", articlesController);
app.use("/fruits", fruitsController);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("listening....");
});
