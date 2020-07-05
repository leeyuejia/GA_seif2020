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


const calculate = (operator,number1,number2) => {
    if (operator === "add") {
        return number1 + number2;
    }
    else if (operator === "minus") {
        return number1 - number2;
    }
    else if (operator === "divide") {
        return number1 / number2;
    }
    else if (operator === "multiply") {
        return number1 * number2;
    }
    else return false
}

app.get('/calcquery/:num1/:num2', (req, res) => {
    let number1 = parseInt(req.params.num1)
    let number2 = parseInt(req.params.num2)
    let operator = req.query.operation;
    let result = calculate(operator,number1,number2);
    if (result) {
        res.send(`sum of ${number1} and ${number2} is ${result}`);
    } else
        res.send("Invalid operation")
})

app.listen(port, () => {
    console.log("I am listening on port", port);
})