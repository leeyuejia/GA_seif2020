require('dotenv').config()
const express = require('express')
const app = express();
const port = process.env.PORT || 3003;

let bottles = 5
let url = "http://localhost:3000/"

app.get("/", (req,res) => {
    res.send(`
    <h1> ${bottles} Bottles of beer on the wall </h1>
    <a href="${url + bottles}">take one down and pass it around</a>
    `)
})

app.get("/:number_of_bottles", (req, res) => {
    let bottlesLeft = parseInt(req.params.number_of_bottles);
    console.log(bottlesLeft)
    if (bottlesLeft>0) {
        res.send(`
        <h1> ${bottlesLeft} Bottles of beer on the wall </h1>
        <a href="${url + (bottlesLeft -1)}"> 
        Take one down and pass it around</a>
        `)
    }
    else {
        res.send(`
        <h1> No more bottles of beer left on the wall </h1>
        <a href="${url}"> 
        Order More beers now!</a>
        `)
    }
})

let fibonacciURL = "/fibonacci/:numberinput"
let num1 = 0
let num2 = 1
let num3 = num1 +num2
let fNumber = []

const isFnumber = (limit) => {
    for (let i=0; i <limit; i++) { 
        fNumber.push(num3)
        num1 = num2;
        num2 = num3;
        num3 = num1 + num2;
    }
    return fNumber;
};
isFnumber(20)

app.get(fibonacciURL, (req,res)=>{
    console.log(req.params.numberinput)
    let inputNumber = parseInt(req.params.numberinput)
    if (fNumber.includes(inputNumber)) {
        res.send(`
        <h1>This number: ${inputNumber} is a fibonacci number!`)
    }
    else 
    res.send(`
    <h1> Nope! This is not a fibonacci number`
    )
})

app.listen(port, () => {
    console.log("I am listening")
})