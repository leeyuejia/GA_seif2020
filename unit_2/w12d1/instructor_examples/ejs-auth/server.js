const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

// Controllers
const userController = require("./controllers/users.js");
const sessionsController = require("./controllers/sessions.js");

// Configuration
const PORT = process.env.PORT;
const mongoURI = process.env.MONGODB_URI;

// Database
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Middleware
// allows us to use put and delete methods
app.use(methodOverride("_method"));
// parses info from our input fields into an object
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// Use controllers
app.use("/users", userController);
app.use("/sessions", sessionsController);

// Routes
app.get("/", (req, res) => {
  //res.render("index.ejs");
  res.render("index.ejs", {
    currentUser: req.session.currentUser
  });
});

app.get("/app", (req, res) => {
  if (req.session.currentUser) {
    res.render("app/index.ejs");
  } else {
    res.redirect("/sessions/new");
  }
});

// Listen
app.listen(PORT, () => console.log("auth happening on port", PORT));
