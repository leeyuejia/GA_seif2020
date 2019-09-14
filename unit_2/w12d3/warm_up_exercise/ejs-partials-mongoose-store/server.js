//___________________
//Dependencies
//___________________
const express         = require ( 'express' );
const bodyParser      = require ( 'body-parser' );
const methodOverride  = require ( 'method-override' );
const mongoose        = require ( 'mongoose' );
const app             = express ();

//___________________
//Port
//___________________
const PORT            = process.env.PORT || 3000;

//___________________
//Database
//___________________

mongoURI = process.env.MONGOURI ||'mongodb://localhost/karolin_mongoose_store'

//connect to this database - don't forget to start `mongod`
mongoose.connect( mongoURI );

//set the connection to constiable for easy access`
const db = mongoose.connection;

//  use this fancy looking stuff to get more useful error messages in your console
db.on( 'error' , console.error.bind( console , 'connection error: ' ));
db.once ( 'open' , function () {
  console.log( 'DB: Connected' );
});

//___________________
//Controllers
//___________________
//Step 1/3 require the controller to be able to use the products routes
const productsController = require ( './controllers/products' );

//___________________
//Middleware
//___________________
app.use( express.static ( 'public' ) );

app.use( methodOverride( '_method' ) );// allow POST, PUT and DELETE from a form
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use( bodyParser.urlencoded( { extended : false } ) ); // extended: false - does not allow nested objects in query strings

app.use( bodyParser.json() );// returns middleware that only parses JSON

//Step 2/3 app.use this controller and when `/products` is visted
//Note, step 3 is in controllers/products.js
app.use( '/products', productsController );


//___________________
// Routes
//___________________
//localhost:3000  - this will reroute to `products`
app.get( '/' , ( req, res ) => {
  res.redirect( '/products' );
});

//___________________
//Listener
//___________________
app.listen( PORT, () => console.log( 'Hurry! Last chance to buy amazing items on port', PORT ));
