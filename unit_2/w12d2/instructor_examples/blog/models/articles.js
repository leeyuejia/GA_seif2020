const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = mongoose.Schema({
  title: String,
  body: String,
  author: { type: Schema.Types.ObjectId, ref: "Author" }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
