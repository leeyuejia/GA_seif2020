const express = require('express');
const router = express.Router();
const Fruit = require('../models/Fruit.js');

// Seed route
// router.get('/seed', (req, res) => {
// 	Fruit.create(
// 		[
// 			{
// 				name: 'grapefruit',
// 				color: 'pink',
// 				readyToEat: true
// 			},
// 			{
// 				name: 'grape',
// 				color: 'purple',
// 				readyToEat: false
// 			},
// 			{
// 				name: 'avocado',
// 				color: 'green',
// 				readyToEat: true
// 			}
// 		],
// 		(err, data) => {
// 			res.redirect('/fruits');
// 		}
// 	);
// });

// Index route
router.get('/', (req, res) => {
	Fruit.find({}, (err, allFruits) => {
		if (err) console.error(err.message);
		else {
			res.render('index.ejs', {
				fruits: allFruits
			});
		}
	});
});

// API Index route
router.get('/api', (req, res) => {
	Fruit.find({}, (err, allFruits) => {
		if (err) console.error(err.message);
		else {
			res.json(allFruits);
		}
	});
});

// New route
router.get('/new', (req, res) => {
	res.render('new.ejs');
});

// Show route
router.get('/:id', (req, res) => {
	Fruit.findById(req.params.id, (err, foundFruit) => {
		if (err) res.send(err.message);

		res.render('show.ejs', {
			fruit: foundFruit
		});
	});
});

// Edit route
router.get('/:id/edit', (req, res) => {
	Fruit.findById(req.params.id, (err, foundFruit) => {
		//find the fruit
		res.render('edit.ejs', {
			fruit: foundFruit //pass in found fruit
		});
	});
});

// Delete route
router.delete('/:id', (req, res) => {
	Fruit.findByIdAndRemove(req.params.id, (err, data) => {
		res.redirect('/fruits'); //redirect back to fruits index
	});
});

// Update route
router.put('/:id', (req, res) => {
	if (req.body.readyToEat === 'on') {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}
	Fruit.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedModel) => {
			res.redirect('/fruits');
		}
	);
});

// Create route
router.post('/', (req, res) => {
	if (req.body.readyToEat === 'on') {
		//if checked, req.body.readyToEat is set to 'on'
		req.body.readyToEat = true;
	} else {
		//if not checked, req.body.readyToEat is undefined
		req.body.readyToEat = false;
	}

	Fruit.create(req.body, (err, createdFruit) => {
		if (err) res.send(err.message);

		res.redirect('/fruits');
	});
});

module.exports = router;
