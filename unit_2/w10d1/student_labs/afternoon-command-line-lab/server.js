// dependencies
const express = require('express');
const app = express();

// port
const port = 3000;

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// data
const dates = [
  { name: "Bangor", created_at: Date.now() },
  { name: "San Jose", created_at: Date.now() },
  { name: "Bozeman", created_at: Date.now() }
];
const createDate = (name = "No data") => {
  return {name, created_at:Date.now()}
} 
// get route
app.get("/dates", (req, res) => {
  res.send(dates)
})
// post route
app.post('/dates', (req, res) => {
  console.log('Create route accessed!');
  console.log('req.body is: ', req.body);
  dates.push(createDate(req.body.name));
  console.log(dates)
  res.redirect('/dates')
});

app.post('/dates/list', (req,res)=> {
  console.log(req.body)
  const newDates= req.body.names.map(createDate)
  dates.push(...newDates);
  console.log(dates)
  res.redirect("/dates")
})


app.listen(port, () => console.log('Running on port: ', port));
