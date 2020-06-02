/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const vampires = require('./models/seed_vampires');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'homework';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(async (err) => {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const Vampires = client.db(dbName).collection('Vampires');

    /**********************************************************************
    Write Your Code Below
    **********************************************************************/
    // try {
    //     const result = await Vampires.insertMany(vampires);
    //     assert.equal(vampires.length, result.insertedCount);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({ gender: 'f' }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         victims: {
    //             $gt: 500
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         victims: {
    //             $lte: 150
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         victims: {
    //             $ne: 210234
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         victims: {
    //             $gt: 150,
    //             $lt: 500
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         title: {
    //             $exists: true
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         victims: {
    //             $exists: false
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         title: {
    //             $exists: true
    //         },
    //         victims: {
    //             $exists: false
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         victims: {
    //             $exists: true,
    //             $gt: 1000
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         $or: [{
    //             location: 'New York, New York, US'
    //         }, {
    //             location: 'New Orleans, Louisiana, US'
    //         }]
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         $or: [{
    //             loves: 'brooding'
    //         }, {
    //             loves: 'being tragic'
    //         }]
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         $or: [{
    //             victims: {
    //                 $gt: 1000
    //             }
    //         }, {
    //             loves: 'marshmallows'
    //         }]
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         $or: [{
    //             hair_color: 'red'
    //         }, {
    //             eye_color: 'green'
    //         }]
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         loves: {
    //             $in: [
    //                 'appearing innocent', 
    //                 'trickery', 
    //                 'lurking in rotting mansions', 
    //                 'R&B music'
    //             ]
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         loves: {
    //             $in: ['fancy cloaks'],
    //             $nin: [
    //                 'top hats', 
    //                 'virgin blood', 
    //             ]
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         loves: 'ribbons',
    //         eye_color: {
    //             $ne: 'brown'
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         location: {
    //             $ne: 'Rome, Italy'
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         loves: {
    //             $nin: [
    //                 'fancy cloaks', 
    //                 'frilly shirtsleeves', 
    //                 'appearing innocent', 
    //                 'being tragic', 
    //                 'brooding'
    //             ]
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const results = await Vampires.find({
    //         victims: {
    //             $lte: 200
    //         }
    //     }).toArray();
    //     console.log(results);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }
    
    // try {
    //     const result = await Vampires.updateOne({
    //         name: 'Claudia'
    //     }, {
    //         $set: {
    //             name: 'Eve',
    //             portrayed_by: 'Tilda Swinton'
    //         }
    //     });
    //     assert.equal(1, result.result.n);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const result = await Vampires.updateOne({
    //         gender: 'm'
    //     }, {
    //         $set: {
    //             name: 'Guy Man',
    //             is_actually: 'were-lizard'
    //         }
    //     });
    //     assert.equal(1, result.result.n);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const result = await Vampires.updateOne({
    //         name: 'Guy Man'
    //     }, {
    //         $set: {
    //             gender: 'f',
    //         }
    //     });
    //     assert.equal(1, result.result.n);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const result = await Vampires.updateOne({
    //         name: 'Guy Man'
    //     }, {
    //         $set: {
    //             hates: ['clothes', 'jobs'],
    //         }
    //     });
    //     assert.equal(1, result.result.n);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const result = await Vampires.updateOne({
    //         name: 'Guy Man'
    //     }, {
    //         $push: {
    //             hates: { $each: ['alarm clocks', 'jackalopes'] },
    //         }
    //     });
    //     assert.equal(1, result.result.n);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const result = await Vampires.updateMany({
    //         gender: 'f'
    //     }, {
    //         $set: {
    //             gender: 'fems'
    //         }
    //     });
    //     console.log(result.result);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    // try {
    //     const result = await Vampires.deleteOne({
    //         hair_color: 'brown'
    //     });
    //     assert.equal(1, result.result.n);
    // } catch (err) {
    //     assert.equal(null, err);
    // } finally {
    //     client.close();
    // }

    try {
        const result = await Vampires.deleteMany({
            eye_color: 'blue'
        });
        console.log(result.result);
    } catch (err) {
        assert.equal(null, err);
    } finally {
        client.close();
    }
});

