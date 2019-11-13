const mongoose = require("mongoose");

const fruitSchema = mongoose.Schema({
  name: String,
  color: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
