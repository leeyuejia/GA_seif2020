// Write your mongo shell answers here
// insert 4 vampires
/*db.vampires.insert([
    {
        'name':'Yves Behar',
        'hair_color': 'brown',
        'eye_color': 'black',
        'dob' :new Date(),
        'loves': ['A bloodtype','cheese','icecream'],
        'location': 'Bern, Switzerland',
        'gender' : 'm',
        'victims': 135
    },
    {
        'name':'Vincent Valentino',
        'hair_color': 'black',
        'eye_color': 'red',
        'dob' :new Date(),
        'loves': ['garlic','tomato'],
        'location': 'Westminster, London',
        'gender' : 'm',
        'victims': 0
    },
    {
        'name':'Naomi Hunter',
        'hair_color': 'blonde',
        'eye_color': 'black',
        'dob' :new Date(),
        'loves': ['A bloodtype','biology','wine'],
        'location': 'Munich, Germany',
        'gender' : 'f',
        'victims': 650
    },{
        'name':'Claire Clarkson',
        'hair_color': 'red',
        'eye_color': 'blue',
        'dob' :new Date(),
        'loves': ['O bloodtype','junk food'],
        'location': 'Boston, America',
        'gender' : 'f',
        'victims': 211
    }  
])*/

// Find all the vampires that that are females
    //db.vampires.find({gender:'f'},{_id:0})
// have greater than 500 victims
    //db.vampires.find({victims:{$gt:500}},{_id:0})
// have fewer than or equal to 150 victims
    //db.vampires.find({victims:{$lte:150}},{_id:0})
// have a victim count is not equal to 210234
    //db.vampires.find({victims:{$ne:210234}},{_id:0})
// have greater than 150 AND fewer than 500 victims
    //db.vampires.find(
        // {$and:[
        //     {victims:{$gt:150}},
        //     {victims:{$lt:500}}
        //     ]
        // }
        // )

// Select all the vampires that:

// have a key of 'title'
    // db.vampires.find({title: {$exists:true}})
// do not have a key of 'victims'
    // db.vampires.find({victims: {$exists:false}})
// have a title AND no victims
    // db.vampires.find({
        // $and:[
        //     {title:{$exist:true}},
        //     {victims:{$exists:false}}
        //     ]
        // })
// have victims AND the victims they have are greater than 100
    // db.vampires.find({victims:{$gt:100}})


// Select all the vampires that:

// are from New York, New York, US or New Orleans, Louisiana, US
    // db.vampires.find({
        // $or:[
        //     {location:'New York, New York, US'},
        //     {location:'New Orleans, Louisiana, US'}
        //     ]
        // })
// love brooding or being tragic
    // db.vampires.find({
        // $or:[
        //     {loves:'brooding'},
        //     {loves:'being tragic'}
        // ]
        // })
// have more than 1000 victims or love marshmallows
    // db.vampires.find({
        // $or:[
        //     {victims:{$gt: 1000}},
        //     {loves:'marshmallows'}
        // ]
        // })
// have red hair or green eyes
    // db.vampires.find({
        // $or:[
        //     {'hair_color': 'red'},
        //     {'eye_color': 'green'}
        // ]
        // })

// Select all the vampires that:

// love either frilly shirtsleeves or frilly collars
// love brooding
// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *

    //  db.vampires.find({
    //     $or:[
    //         {$or:[
    //             {loves: 'frilly shirtsleeves'},
    //             {loves: 'frilly collars'}
    //         ]},
    //         {loves: 'brooding'},
    //         {$or:[
    //             {loves: 'appearing innocent'},
    //             {loves: 'trickery'},
    //             {loves: 'lurking in rotting mansions'},
    //             {loves: 'R&B music'}
    //         ]},
    //         {$and:[
    //             {loves:'fancy cloaks'},
    //             {loves:{$nin:['top hats','virgin blood']}}
    //         ]}
    //     ]
    // })

// Select all vampires that:

// love ribbons but do not have brown eyes
    // db.vampires.find({
    //     $and:[
    //         {loves:'ribbons'},
    //         {eye_color: { $not:{$eq: 'brown'}}}
    //     ]
    // })
// are not from Rome
    // db.vampires.find({
    //     location: {$not:/^Rome/}
    // })
// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
    // db.vampires.find({
    //     loves:{$nin:['fancy cloaks','frilly shirtsleeves','appearing innocent','being tragic','brooding']}
    // })
// have not killed more than 200 people
    // db.vampires.find({
    //     victims:{$not:{$gt:200}}
    // })

// Replace
// replace the vampire called 'Claudia' with a vampire called 'Eve'. 
// 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
    // db.vampires.updateOne(
    //     {name:'Claudia'}, 
    //     {$set:{'name':'Eve', 'portrayed_by':'Tilda Swinton'}}
    // )
// replace the first male vampire with another whose name is 'Guy Man', 
// and who has a key 'is_actually' with the value 'were-lizard'
    // db.vampires.updateOne(
    //     {gender:'m'},
    //     {$set:{'name':'Guy Man','is_actually':'were lizard'}}
    // )

// Update
// Update 'Guy Man' to have a gender of 'f'
    // db.vampires.update(
    //     {name:'Guy Man'},
    //     {$set:{gender:'f'}}
    // )
// Update 'Eve' to have a gender of 'm'
    // db.vampires.update (
    //     {name:'Eve'},
    //     {$set:{gender:'f'}}
    // )
// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
    // db.vampires.update(
    //     {name:'Guy Man'},
    //     {$set:{hates: ['clothes','jobs']}}
    // )
// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
    // db.vampires.update(
    //     {name:'Guy Man'},
    //     {$push:{hates:{$each:['alarm clocks','jackalopes']}}}
    // )
// Rename 'Eve's' name field to 'moniker'
    // db.vampires.findOneAndUpdate(
    //     {name:'Eve'},
    //     {$set:{'name':'moniker'}}
    // )
    // it displayed the find result but no confirmation whether or not it has been updated

// We now no longer want to categorize female gender as "f", but rather as fems. 
// Update all females so that the they are of gender "fems".
    // db.vampires.updateMany(
    //     {gender: 'f'},
    //     {$set:{gender:'fems'}}
    // )

// Remove
// Remove a single document wherein the hair_color is 'brown'
    // db.vampires.remove(
    //     {hair_color:'brown'},
    //     {justOne:true}
    // )
// We found out that the vampires with the blue eyes were just fakes! 
// Let's remove all the vampires who have blue eyes from our database.
    // db.vampires.remove({eye_color: 'blue'},{multi:true})