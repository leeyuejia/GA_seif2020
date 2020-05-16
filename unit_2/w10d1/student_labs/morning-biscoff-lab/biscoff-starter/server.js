// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});
// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods', (req, res) => {
  res.render('index.ejs', {bakedGoods})
});

//NEW ROUTE
app.get("/bakedgoods/new", (req, res) => {
  res.render('new.ejs');
})

// show route
app.get('/bakedgoods/:id', (req, res) => {
  let indexOfGoods= req.params.id
  console.log(indexOfGoods)
  res.render('show.ejs',{bakedGoods, indexOfGoods} )
});

// POST ROUTE
app.post('/bakedgoods', (req,res)=> {
  console.log(req.body)
  bakedGoods.push(req.body)
  res.redirect('/bakedgoods')
})

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
