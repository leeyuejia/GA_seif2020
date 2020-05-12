
const { displayFruit, sendFruits, showForm } = require('./controllers');
const express = require('express');
const router = express.Router();

router.get('/fruits', sendFruits);

router.get('/fruits/:id', displayFruit);

router.get('/fruits/:id/edit', showForm);

module.exports = router;