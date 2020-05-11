const express = require('express');
const app = express();
const PORT = process.env.PORT | 5000;

app.get('/', ( req, res ) => {
    console.log('Oh hey! Here I got a request. Let me respond with something');
    res.send('Hello World!');
});

app.get('/Somedata', (request, response) => {
    response.send('fddf here is your information');
});

app.listen(PORT, () => {
    console.log('I am listening for requests!!!');
});
