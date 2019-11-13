const express = require("express");
const router = express.Router();
const Article = require("../models/articles.js");

router.get("/", (req, res) => {
  Article.find({}, (err, foundArticles) => {
    res.render("articles/index.ejs", {
      articles: foundArticles
    });
  });

  // Article.find()
  //   .populate("author")
  //   .exec((err, foundArticles) => {
  //     if (err) console.error(err.message);

  //     if (foundArticles) {
  //       console.log("Showing all articles..");
  //       console.log(foundArticles);
  //       res.render("articles/index.ejs", {
  //         articles: foundArticles
  //       });
  //     }
  //   });
});

router.get("/new", (req, res) => {
  res.render("articles/new.ejs");
});

//...
//...farther down the page
router.post("/", (req, res) => {
  Article.create(req.body, (err, createdArticle) => {
    res.redirect("/articles");
  });
});

router.delete("/:id", (req, res) => {
  Article.findByIdAndRemove(req.params.id, () => {
    res.redirect("/articles");
  });
});

router.get("/:id/edit", (req, res) => {
  Article.findById(req.params.id, (err, foundArticle) => {
    res.render("articles/edit.ejs", {
      article: foundArticle
    });
  });
});

router.put("/:id", (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect("/articles");
  });
});

//avoid this handling /new by placing it towards the bottom of the file
router.get("/:id", (req, res) => {
  Article.findById(req.params.id, (err, foundArticle) => {
    res.render("articles/show.ejs", {
      article: foundArticle
    });
  });

  // Article.findById(req.params.id)
  //   .populate("author")
  //   .exec((error, foundArticle) => {
  //     //dynamically switch out any ids with the objects they reference
  //     console.log(foundArticle);
  //     res.render("articles/show.ejs", {
  //       article: foundArticle
  //     });
  //     //mongoose.connection.close();
  //   });
});

module.exports = router;
