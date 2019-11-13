const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruits.js");

router.get("/", (req, res) => {
  Fruit.find({}, (err, fruits) => {
    res.send(fruits);
  });
});

module.exports = router;
