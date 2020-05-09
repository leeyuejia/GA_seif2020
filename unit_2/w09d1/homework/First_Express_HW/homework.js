require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 4000

//ALL FUNCTION
const tip = (bill,tipRate) => {
    return (tipRate / 100) * bill;
}

//ALL ROUTES
app.get("/greeting/:name", (req,res) => {
    res.send(`Hello, ${req.params.name}`);
})

app.get("/tip/:total/:tippercentage", (req,res) => {
    let bill = parseInt(req.params.total)
    let tipRate = parseInt(req.params.tippercentage)
    res.send("total bill is " + bill + " and the tip is " + tip(bill,tipRate));
})


//ALL LISTENING
app.listen(port, ()=> {
    console.log("I am listening")
})