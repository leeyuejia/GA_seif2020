// create 5 burgers (at least 3 should be beef)
/*
db.burgers.insert ([
    {name: 'Samurai Burger',
     meat: 'Beef',
     ingredient: ['Bread','Onions','Cheese',"Wagyu Beef","black pepper sauce", "pickles"],
     isSpicy : true,
     cheese : true,
     price : 9
    },

    {name: 'Geisha Burger',
    meat: 'Beef',
    ingredient: ['Bread','Lettuces',"Angus Beef","chilli sauce", "salt"],
    isSpicy : true,
    cheese : false,
    price : 8},

    {name: 'Ninja Burger',
    meat: 'Beef',
    ingredient: ['Bread','Asparagus',"Kobe Beef","sweet sauce", "egg"],
    isSpicy : false,
    cheese: true || false,
    price : 10},

    {name: 'Earth Burger',
    meat: 'Vegan chicken',
    ingredient: ['Bread','carrot',"vegan chicken","Ketchup", "Lettuces"],
    isSpicy : false,
    cheese: false,
    price : 7},

    {name: 'Galore Burger',
    meat: 'Pork',
    ingredient: ['Bread','garlic',"Tomatoes","Kimchi", "chilli flake", "cheese"],
    isSpicy : true,
    cheese : true,
    price : 8}
])
*/


// show just the meat of each burger
//db.burger.find({},{meat:1,_id:0})


// show just the toppings of each burger
//db.burger.find({},{ingredient:1,_id:1})


// show everything but the cheese
//db.burger.find({},{cheese:0,_id:0})

// find all the burgers with beef
//db.burger.find(
//     {meat: "Beef"}
// )



// find all the burgers that are not beef
//db.burger.find({meat: {$ne: 'Beef'}})

// find the first burger with cheese
//db.burger.findOne({cheese:true})

// find one and update the first burger with cheese to have a property of 'double cheese'
//db.burger.updateOne({cheese:true},{$rename:{cheese:"double cheese"}})

// find the burger you updated to have double cheese
//db.burger.find({'double cheese':true})

// find and update all the beef burgers to be 'veggie'
//db.burger.update({meat:"beef"},{$set:{meat:veggie}}, {multi:true})

// delete one of your veggie burgers
//db.burger.remove({meat:"veggie"},{justOne:true})
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})


// drop the collection
//Expected Output
//true
//db.burger.drop()

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
//db.dropDatabase()


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'
//db.burger.updateMany({}, {$rename:{cheese: 'pumpkin spice'}})


// find all the burgers with ketchup (or another topping you used at least once)
//db.burger.find({ingredient: 'Ketchup'})

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
//db.burger.find({},{$pull:{ingredient:"pickles"}})

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
//db.burger.update({meat:"Beef"}, {$push:{ingredient: "egg"}}, {multi:true})

//Add a price to each burger, start with $5.00 for each burger 
//db.burger.update({},{$set:{price:20}},{multi:true})