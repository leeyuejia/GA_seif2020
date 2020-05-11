const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

const plants = [
    'Monstera Deliciosa',
    'Corpse Flower',
    'Elephant-Foot Yam',
    'Witches\' Butter'
];

app.get('/hello/:firstName', function (req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
});

app.get('/awesome', (req, res) => {
    //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
});

app.get('/hello/:firstname/:lastname', (request123, response456) => {
    console.log(request123);
    response456.send(
        'hello ' +
			request123.params.firstname +
			' ' +
			request123.params.lastname
    );
});

app.get('/:indexOfPlantsArray', (req, res) => {
    if (plants[req.params.indexOfPlantsArray]) {
        res.send(plants[req.params.indexOfPlantsArray]);
    } else {
        res.send(
            'cannot find anything at this index: ' +
				req.params.indexOfPlantsArray
        );
    }
});

app.listen(port, () => {
    console.log('listening on port', port);
});
