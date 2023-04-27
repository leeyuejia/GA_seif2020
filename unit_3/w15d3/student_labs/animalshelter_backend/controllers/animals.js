const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is homepage')
})

router.get('/animals', (req, res) => {
    res.send('this is homepage animal')
})

module.exports = router;