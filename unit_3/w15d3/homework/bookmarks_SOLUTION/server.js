// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const cors = require("cors"); //allow both react and express to run on the same machine

// Environment Variables
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://steve-admin:0Ptimad8@iapplytics-cluster-u4l8g.mongodb.net/test?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3004;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () =>
  console.log("MongoDB connection established:", mongoURI)
);

// Error / Disconnection
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Middleware
app.use(express.json()); // returns middleware that only parses JSON
app.use(express.static("public"));
app.use(cors());

// Routes
const bookmarksController = require("./controllers/bookmarks.js");
app.use("/bookmarks", bookmarksController);

// this will catch any route that doesn't exist
app.get("*", (req, res) => {
    res.status(404).json("Sorry, page not found");
  });
  
app.listen(PORT, () => {
    console.log("Let's get things done on port", PORT);
  });