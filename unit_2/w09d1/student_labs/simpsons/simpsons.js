express = require('express')
app = express();

app.get("/Homer", (request, response) => {
    response.send("I am Homer")
})

app.get("/marge", (request, response) => {
    response.send("I am Marge")
})

app.get("/bart", (request, response)=> {
    response.send("I am bart")
})

app.get("/lisa", (request, response)=> {
    response.send("I am lisa")
})

app.get("/Maggie", (request, response)=> {
    response.send("I am maggie")
})

app.get("/snowball-II", (request, response)=> {
    response.send("I am snowball II")
})

app.get("/lisa", (request, response)=> {
    response.send("I am lisa")
})

app.get("/santa-little-help", (request, response)=> {
    response.send("I am Santa")
    response.send(" I am santa's little helper")
})

app.get("/webpage", (request,response)=> {
    response.send(`
    <html>
        <body>
            <h1>The simpsons!</h1>
        </body>
    </html>
`);
})

app.listen(3000,() => {
    console.log("I am listening");
})
