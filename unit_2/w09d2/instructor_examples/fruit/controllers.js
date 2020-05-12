const fruits = require('./models/fruits');

const displayFruit = (req, res) => {
    res.send(fruits[req.params.id]);
};

const sendFruits = (req, res) => {
    res.send(fruits);
};

const showForm = (req, res) => {
    res.render('form.ejs', { fruit: fruits[req.params.id] });
};

module.exports = {
    displayFruit,
    sendFruits,
    showForm
};