const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/testmodels");

// setup article schema and model
const articleSchema = new Schema({
  title: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "Author" } //the author property is just an id of another object
});
const Article = mongoose.model("Article", articleSchema);

// setup author schema and model
const authorSchema = new Schema({
  name: { type: String }
});
const Author = mongoose.model("Author", authorSchema);

// create Author
Author.create({ name: "Matt" }, (err, createdAuthor) => {
  // create Article and pass in Author id
  Article.create(
    {
      title: "Awesome Title",
      author: createdAuthor._id
    },
    (err, createdArticle) => {
      // Find all articles and populate Author
      Article.find()
        .populate("author")
        .exec((error, articles) => {
          //dynamically switch out any ids with the objects they reference
          console.log(articles);
          mongoose.connection.close();
        });
    }
  );
});
