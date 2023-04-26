const express = require('express');
const router = express.Router();
const Animals = require('../models/animals.js');

router.get('/', (req, res) => {
    Animals.find({}, (err, foundAnimal) => {
        res.json(foundAnimal);
    })
});

router.delete('/:id', (req, res) => {
    Animals.findByIdAndRemove(req.params.id, (err, deletedAnimal) => {
        res.json(deletedAnimal);
    })
})

router.post('/', (req, res) => {
    Animals.create(req.body, (err, createdAnimal) => {
        res.json(createdAnimal);
    });
})

router.put('/:id', (req, res) => {
    Animals.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedAnimal) => {
        res.json(updatedAnimal)
    })
})

module.exports = router;
