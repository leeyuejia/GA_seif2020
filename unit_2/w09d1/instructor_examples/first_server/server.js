const express = require('express');

const app = express();
 
app.get('/', function (req, res) {
    console.log(req.protocol);
    res.send('Hello World')
});

app.get('/goodbye', function (req, res) {
    res.send('Bye bye')
});

app.get('/data', function (req, res) {
    res.send('Sending information..')
});

 
app.listen(3000, () => {
    console.log(`Server is listening at Port 5000`);
});