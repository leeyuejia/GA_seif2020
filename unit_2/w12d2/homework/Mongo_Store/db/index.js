////////////////////     Creating raw seed data in json ///////////////////
/*const fetch = require("node-fetch")
const fs = require('fs')
const rawData = () => {
    fetch('https://mhw-db.com/monsters')
    .then(res => res.json())
    .then(monsters => {
        let data = JSON.stringify(monsters)
        fs.writeFileSync('monsterData.json', data)
    })
}
rawData()
*/

const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://localhost:27017'
const assert = require('assert')
const DB_NAME = 'lab'
const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });


module.exports = {
    async connect() {
        const connection = await client.connect();
        console.log('connected')
        this.monsters = connection.db(DB_NAME).collection('monsters')
    },
    disconnect () {
        return client.close();
    }
};




/////////////////////////   Add fields to data (run only once!)  ////////////////////////////////

/*
client.connect(async (err)=> {
    assert.equal(null, err)
    console.log('connected sucessfully to server');
    const monsters = client.db(DB_NAME).collection('monsters')

const generateRandomPrice = (min, max) => {
    return Math.floor(Math.random()*(max - min) + min)
}
    const largeMonster = monsters.find({type:'small'})
    largeMonster.forEach(el => {
        monsters.updateOne({_id: el._id}, {$set:{
                price: generateRandomPrice(30,100),
                qty: generateRandomPrice(3,10),
                img: ""
                }
            }
        )
    })

})
*/