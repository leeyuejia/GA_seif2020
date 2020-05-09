require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 4000

//ALL FUNCTION && Declaration
const tip = (bill,tipRate) => {
    return (tipRate / 100) * bill;
}
const arrayOfResponses = ["It is certain", "It is decidedly so", "Without a doubt", 
        "Yes definitely","You may rely on it", "As I see it yes", 
        "Most likely", "Outlook good","Yes", "Signs point to yes", 
        "Reply hazy try again", "Ask again later","Better not tell you now", 
        "Cannot predict now", "Concentrate and ask again","Don't count on it", 
        "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

const randomResponse = () => {
    let randomNumber = Math.floor(Math.random() * arrayOfResponses.length - 1)
    return arrayOfResponses[randomNumber]
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

app.get("/magic/:question", (req,res)=> {
    if (req.params.question) {
        res.send(`
        <html>
            <body>
                <h1>MAGIC 8 Ball : Ask away</h1>
                <h2>Your Question is : ${req.params.question}</h2>
                <h2>${randomResponse()}</h2>
            </body>
        </html>
        `)
    } else res.send("There is no question")
})

//ALL LISTENING
app.listen(port, ()=> {
    console.log("I am listening")
})