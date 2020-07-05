const express = require('express');
const app = express();
<<<<<<< HEAD
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
=======

app.get('/', (req, res)=> {
    console.log("I am here")
    res.send('Hello World!');
});

app.get('/somedata', (req, res) => {
    res.send('here is your');
})

app.listen(3000, () => {
    console.log("I am listening")
})
>>>>>>> 85e7a99ca5cfcf6480429364359401c311fafb1a
