const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	Author.find({}, (err, foundAuthors)=>{
		res.render('authors/index.ejs', {
			authors: foundAuthors
		});
	})
});

router.get('/new', (req, res)=>{
	res.render('authors/new.ejs');
});

const Author = require('../models/authors.js');
//...
//...farther down the page
router.post('/', (req, res)=>{
	Author.create(req.body, (err, createdAuthor)=>{
		res.redirect('/authors');
	});
});


router.delete('/:id', (req, res)=>{
	Author.findByIdAndRemove(req.params.id, ()=>{
		res.redirect('/authors');
	});
});


router.get('/:id/edit', (req, res)=>{
	Author.findById(req.params.id, (err, foundAuthor)=>{
		res.render('authors/edit.ejs', {
			author: foundAuthor
		});
	});
});

router.put('/:id', (req, res)=>{
	Author.findByIdAndUpdate(req.params.id, req.body, ()=>{
		res.redirect('/authors');
	});
});


//avoid this handling /new by placing it towards the bottom of the file
router.get('/:id', (req, res)=>{
	Author.findById(req.params.id, (err, foundAuthor)=>{
		res.render('authors/show.ejs', {
			author: foundAuthor
		});
	});
});



module.exports = router;