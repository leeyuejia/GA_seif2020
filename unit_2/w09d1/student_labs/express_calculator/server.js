require('dotenv').config()
const express = require('express')
const app = express();
const port = process.env.PORT || 3003;

app.get('/calc/:num1/:num2', (req,res) => {
    res.send(`number 1 - ${req.params.num1} and number 2 - ${req.params.num2} and the sum is ${parseInt(req.params.num1) + parseInt(req.params.num2)}`);
});

app.get('/someroute', (req, res) => {
    console.log('req.query: ', req.query);
    res.send('someroute accessed' + req.query);
  });

app.get('/calcquery/:num1/:num2', (req, res) => {
    let number1 = parseInt(req.params.num1)
    let number2 = parseInt(req.params.num2)
    if (req.query.operation === "add") {
        let sum = number1 + number2;
        res.send(`sum of ${number1} and ${number2} is ${sum}`);
    }
    else if (req.query.operation === "subtract") {
        let sum = number1 - number2;
        res.send(`sum of ${number1} and ${number2} is ${sum}`);
    }
    else if (req.query.operation === 'multiply') {
        let sum = number1 * number2;
        res.send(`sum of ${number1} and ${number2} is ${sum}`);
    }
    else if (req.query.operation === 'divide') {
        let sum = number1 / number2;
        res.send(`sum of ${number1} and ${number2} is ${sum}`);
    }
    else
        res.send("Wrong operations!")
})

app.listen(port, () => {
    console.log("I am listening on port", port);
})