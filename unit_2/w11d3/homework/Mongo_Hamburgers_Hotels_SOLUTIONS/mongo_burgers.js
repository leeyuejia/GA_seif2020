
// create 5 burgers (at least 3 should be beef)

db.burger.insert(
  {
    meat: 'beef',
    cheese: false,
    toppings: ['ketchup' ,'onions' ,'pickles']
  }
)


db.burger.insert(
  {
    meat: 'beef',
    cheese: true,
    toppings: ['maple syrup' ,'deep fried waffle bits' ,'hot fudge']
  }
)

db.burger.insert(
  {
    meat: 'beef',
    cheese: true,
    toppings: ['fried banana' ,'peanut butter' ,'jelly']
  }
)

db.burger.insert(
  {
    meat: 'beef',
    cheese: false,
    toppings: ['ramen' ,'olives' ,'french fries']
  }
)

db.burger.insert(
  {
    meat: 'tofu',
    cheese: false,
  }
)

db.burger.insert(
  {
    meat: 'turkey',
    cheese: false,
    toppings: ['sriracha' ,'pickles' ,'kimchi' , 'pickled beets']
  }
)

// find all the burgers
db.burger.find()

// show just the meat of each burger
db.burger.find({}, {meat: 1, _id:0}

// show just the toppings of each burger
db.burger.find({}, {toppings: 1, _id:0})

// show everything but the cheese
db.burger.find({}, {cheese: 0})

// find all the burgers with beef
db.burger.find({meat:'beef'})

// find all the burgers that are not beef
db.burger.find({meat:{$ne:'beef'}})

// find the first burger with cheese
db.burger.findOne({cheese: true})

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.findOneAndUpdate({cheese: true}, {$set:{cheese: 'double cheese'}})

// find the burger you updated to have double cheese
db.burger.find({cheese:'double cheese'})

// find and update all the beef burgers to be 'veggie'
db.burger.update({meat:'beef'}, {$set:{meat:'veggie'}}, {multi: true})

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burger.findAndModify({query: {meat: 'veggie'}, remove: true})

// drop the collection

db.burger.drop()

//outputs
// true

// drop the database
// Expected output
// {
//   "dropped": "burgers",
//   "ok": 1
// }


db.dropDatabase()
