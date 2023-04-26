/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const vampiresData = require('./models/seed_vampires');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'homework';

// Create a new MongoClient
const client = new MongoClient(url, {
    useUnifiedTopology: true
});

const newVampires = [
    {
        'name': 'Yves Behar',
        'hair_color': 'brown',
        'eye_color': 'black',
        'dob': new Date(),
        'loves': ['A bloodtype', 'cheese', 'icecream'],
        'location': 'Bern, Switzerland',
        'gender': 'm',
        'victims': 135
    },
    {
        'name': 'Vincent Valentino',
        'hair_color': 'black',
        'eye_color': 'red',
        'dob': new Date(),
        'loves': ['garlic', 'tomato'],
        'location': 'Westminster, London',
        'gender': 'm',
        'victims': 0
    },
    {
        'name': 'Naomi Hunter',
        'hair_color': 'blonde',
        'eye_color': 'black',
        'dob': new Date(),
        'loves': ['A bloodtype', 'biology', 'wine'],
        'location': 'Munich, Germany',
        'gender': 'f',
        'victims': 650
    }, {
        'name': 'Claire Clarkson',
        'hair_color': 'red',
        'eye_color': 'blue',
        'dob': new Date(),
        'loves': ['O bloodtype', 'junk food'],
        'location': 'Boston, America',
        'gender': 'f',
        'victims': 211
    }
]

// Use connect method to connect to the Server
client.connect(async (err) => {
    assert.equal(null, err);
    console.log('Connected successfully to server');
    const Vampires = client.db(dbName).collection('Vampires');

    // Vampires.insertMany(vampiresData, function (err, result) {
    //     assert.equal(null, err);
    //     assert.equal(vampiresData.length, result.insertedCount);

    //     client.close();
    // });


    /**********************************************************************
    Write Your Code Below
    **********************************************************************/
/////// Insert new vampires
    Vampires.insertMany(newVampires, (err, result)=> {
        assert.equal(err, null)
        assert.equal(newVampires.length, result.insertedCount)
    })

////// find all vampire that are females
    Vampires.find(
        { gender: 'f' },
        {
            projection: {
                _id: 0
            }
        }).toArray((err, result) => {
            assert.equal(err, null)
            console.log(result)
        })

////// have greater than 500 victims
    Vampires.find({
        victims: { $gt: 500 }
    }, {
        projection: {
            _id: 0
        }
    }).toArray((err, result) => {
        assert.equal(err, null)
        console.log(result)
    })

/////// have fewer than or equal to 150 victims
    Vampires.find({
        victims:{$lte:150}
    },{
        projection:{
            _id:0
        }
    }).toArray().then(result => {
        console.log(result)
    }).catch(err => {
        assert.equal(err,null)
    })

////// have a victim count in not equal to 210234
    Vampires.find({
        victims:{
            $ne:210234
            }
        }, {projection:{_id:0}
    }).toArray((err,result)=> {
        assert.equal(err,null)
        console.log(result)
    })

////// have $gt 150 and $lt 500 victim counts
    Vampires.find({
        $and:[
            {victims:{$gt:150}},
            {victims:{$lt:500}}
        ]
    }).toArray((err,result)=> {
        assert.equal(err,null)
        console.log(result)
    })

    // with async /await 
    try {
        const res = await Vampires.find({
            $and: [
                { victims: { $gt: 150 } },
                { victims: { $lt: 500 } }
            ]
        }).toArray()
        console.log(res)
    } catch (err) {
        console.log('test')
        assert.equal(err, null);
    } 
      finally {
        client.close()
    }

////// select all vampires that have a key title
    Vampires.find({
        title: { $exists: true }
    }).toArray((err, result) => {
        assert.equal(err, null)
        console.log(result)
    })

////// select al vampire that do not have the key of vicitms
    Vampires.find({
        victims: { $exists: false }
    }).toArray((err, result) => {
        assert.equal(err, null)
        console.log(result)
    })

////// have title AND no victims
    Vampires.find({
        $and:[
            { title: {$exists: true}},
            {victims:{$exists: false}}
        ]
    }).toArray((err, result)=> {
        assert.equal(err, null)
        console.log(result)
    })

    try {
        const res = await Vampires.find({
            $and: [
                { title: { $exists: true } },
                { victims: { $exists: false } }
            ]
        }).toArray()
        console.log(res)
    } catch (err) {
        console.log('test')
        assert.equal(err, null)
    }

////// have victims AND the victims they have are greater than 100

    try {
        const res = await Vampires.find({victims:{$gt:100}}).toArray()
        console.log(res)
    } catch (err) {
            console.log('test')
            // assert.equal(err, null)
        }

////// are from New York, New York, US or New Orleans, Louisiana, US

    try {
        const res = await Vampires.find({
            $or: [
                { location: 'New York, New York, US' },
                { location: 'New Orleans, Louisiana, US' }
            ]
        }).toArray()
        console.log(res)
    } catch (err) {
        assert.equal(err, null)
        console.log('test')
    }

////// love brooding or being tragic
    try {
        const res = await Vampires.find(
            {
                $or: [
                    { loves: 'brooding' },
                    { loves: 'being tragic' }
                ]
            }
        ).toArray()
        console.log(res)
    } catch (err) {
        assert.equal(err, null)
        console.log('test')
    }

///// have more than 1000 victims or love marshmallows
    try {
        const res = await Vampires.find(
            {
                $or: [
                    { victims:{$gt: 1000}},
                    { loves: 'marshmallows' }
                ]
            }
        ).toArray()
        console.log(res)
    } catch (err) {
        assert.equal(err, null)
        console.log('test')
    }

///// have red hair or green eyes
    Vampires.find({
        $or: [
            { hair_color: 'red' },
            { eye_color: 'green' }
        ]
    }).toArray().then(result => {
        console.log(result)
    }).catch(err => {
        assert.equal(err, null)
    })

///// love either frilly shirtsleeves or frilly collars
///// love brooding
///// love at least one of the following: appearing innocent, 
///// trickery, lurking in rotting mansions, R&B music
///// love fancy cloaks but not if they also love either top hats or virgin blood
/////  * Hint-You will also have to use $nin *

    try {
        const res = await Vampires.find({
            $or: [
                {$or: [
                        { loves: 'frilly shirtsleeves' },
                        { loves: 'frilly collars' }
                    ]
                },
                { loves: 'brooding' },
                {$or: [
                        { loves: 'appearing innocent' },
                        { loves: 'trickery' },
                        { loves: 'lurking in rotting mansions' },
                        { loves: 'R&B music' }
                    ]
                },
                {$and: [
                        { loves: 'fancy cloaks' },
                        { loves: { $nin: ['top hats', 'virgin blood'] } }
                    ]
                }
            ]
        }).toArray()
        console.log(res)
    } catch (err) {
            assert.equal(err, null)
            console.log('test')
        }

////// love ribbons but do not have brown eyes
    Vampires.find({
        $and:[
            {loves:'ribbons'},
            {eye_color:{$not:{$eq:'brown'}}}
        ]
    }).toArray().then(result => {
        console.log(result)
    }).catch (err => {
        assert.equal(err,null)
        console.long('test')
    })

////// are not from Rome
    Vampires.find({
        location: {$not:/^Rome/}
    }).toArray((err, result) => {
        assert.equal(err, null)
        console.log(result)
    })

/////// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
    Vampires.find({
        loves:{$nin:['fancy cloaks','frilly shirtsleeves','appearing innocent','being tragic','brooding']}
    }).toArray().then(result => {
        console.log(result)
    }).catch (err => {
        assert.equal(err, null)
        console.log('test')
    })

/////// have not killed more than 200 people
    Vampires.find({
            victims:{$not:{$gt:200}}
        }).toArray((err,result) => {
            assert.equal(err,null)
            console.log(result)
        })

/////// Replace
/////// replace the vampire called 'Claudia' with a vampire called 'Eve'.
    Vampires.updateOne(
        { name: 'Claudia' },
        {
            $set: { 'name': 'Eve', 'portrayed_by': 'Tilda Swinton' }
        }, (err, result) => {
            console.log(result)
            assert.equal(err, null)
            assert.equal(1, result.result.n)
        })

////// replace the first male vampire with another whose name is 'Guy Man', 
////// and who has a key 'is_actually' with the value 'were-lizard'
    Vampires.updateOne(
        {gender:'m'},
        {$set:{
            'name':'Guy Man',
            'is_actually':'were lizard'
            }
        },(err, result) => {
        console.log(result)
        assert.equal(1, result.result.n)
        assert.equal(err, null)
    })

////// Update
////// Update 'Guy Man' to have a gender of 'f'
    Vampires.update(
        { name: 'Guy Man' },
        {
            $set: { gender: 'f' }
        }, (err, result) => {
            assert.equal(err, null)
            console.log(result)
        })

////// Update 'Eve' to have a gender of 'm' 
    try {
        const res =  await Vampires.update (
        {name:'Eve'},
        {$set:{gender:'f'}}
        )
        console.log(res)
    } catch (err) {
        assert.equal(err, null)
    }
///////------------  is there a way to display what was updated? instead of using find() --------------///////

/////// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
    Vampires.update(
        {name:'Guy Man'},
        {$set:{
            hates: ['clothes','jobs']
            }
        }
    ).then(result => {
        console.log(result)
    }).catch (err => {
        assert.equal(err, null)
    })

/////// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
    Vampires.update(
        {name:'Guy Man'},
        {$push:{
            hates:{
                $each:['alarm clocks','jackalopes']
                }
            }
        }
    ).then (result => {
        console.log(result)
    }).catch(err => {
        assert.equal(err, null)
    })

////// Rename 'Eve's' name field to 'moniker'
    Vampires.findOneAndUpdate(
        {name:'Eve'},
        {$set:{
            'name':'moniker'
            }
        }, {
            returnOriginal: false
        }, (err, result) => {
            assert.equal(err, null);
            console.log(result)
        }
    )
////// Update all females so that the they are of gender "fems".
    Vampires.updateMany(
        {gender: 'f'},
        {$set:{
            gender:'fems'
            }
        }, (err, result) => {
            console.log(result)
        }
    )

////// Remove
////// Remove a single document wherein the hair_color is 'brown'
    try {
        const result = await Vampires.remove(
            {hair_color:'brown'},
            {justOne:true}
        )
        console.log(result)
    } catch (err) {
        // assert.equal(err, null)
        console.log('error is' + err)
    }
        
////// We found out that the vampires with the blue eyes were just fakes! 
////// Let's remove all the vampires who have blue eyes from our database.
    Vampires.deleteMany(
        {eye_color: 'blue'},
        {multi:true},
        (err, result) => {
            console.log(result)
        }
    ) 





    setTimeout(() => {
        client.close()
    }, 3000)
});

