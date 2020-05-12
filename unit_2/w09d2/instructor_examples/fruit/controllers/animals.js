const { animals } = require('../models');

const sendAnimals = (req, res) => {
    res.send(animals);
};

module.exports = {
    sendAnimals
};