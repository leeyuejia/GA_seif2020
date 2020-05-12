const { fruits, animals } = require('../controllers');
const express = require('express');
const router = express.Router();

router.get('/fruits', fruits.sendFruits);

router.get('/fruits/:id', fruits.displayFruit);

router.get('/fruits/:id/edit', fruits.showForm);

router.get('/animals', animals.sendAnimals);

module.exports = router;