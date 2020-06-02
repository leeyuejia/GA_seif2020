const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
const data = [{
    name: 'Apple',
    founded: 'April 1, 1976',
    employees: 2,
    active: false,
    products: ['computers'],
    CEO: {
        name: 'Steve Jobs',
        age: 21
    }
}, {
    name: 'Google',
    founded: 'September 4, 1988',
    employees: 57100,
    active: true,
    products: ['search', 'maps', 'email'],
    CEO: {
        name: 'Larry Page',
        age: 43
    }
}]
const url = 'mongodb://localhost:27017';
const dbName = 'homework'
const client = new MongoClient(url, {
    useUnifiedTopology: true
})
client.connect((error) => {
    assert.equal(null, error);
    console.log('connected!')
    const techCompany = client.db(dbName).collection('techCompany')
/////////////////////////////////////////////////////////////////////////////
////////////////////////////   CALLBACK   /////////////////////////////////// NOT IN SYNC
/////////////////////////////////////////////////////////////////////////////
/*
    const callback = (error, result) => {
        assert.equal(error, null);
        console.log("callback runned")
        console.log(result)
    }
////// insert data
    techCompany.insertMany(data, (error,result) => {
        assert.equal(error,null)
        assert.equal(data.length,result.insertedCount)
        console.log(result)
    })
////// Update data
    techCompany.findOneAndUpdate(
        { name: 'Apple' },
        { $set: {
                'name': 'Apple Inc',
                'employees': 66000,
                'active': true,
                'CEO.name' : 'Tim Cook',
                'CEO.age' : '56'
                }
            },
        { $push: {
            products: {
                $each: ['phones','tablets']
                }
            }
        },callback)
    techCompany.findOneAndUpdate(
        { name: 'Google' },
        { $set: {
                'employees': 107100,
                'active': true,
                'CEO.name' : 'Sundar Pichai',
                'CEO.age' : '47'
                }
            },
        { $push: {
            products: {
                $each: ['Android','ads','news','game']
                }
            }
        },callback)
////// display employee
    techCompany.findOne(
        {name: 'Apple Inc'}, 
        {projection: {
            _id:0,
            employees:1
            }
        }, callback)
    techCompany.findOne(
        {name: 'Google'}, 
        {projection: {
            _id:0,
            employees:1
            }
        }, callback)
////// remove data
    techCompany.drop({},callback)
/////// close client
    setTimeout(() => {
        client.close()
    }, 3000)
*/
/////////////////////////////////////////////////////////////////////////////
////////////////////////////   PROMISE   //////////////////////////////////// Done working!
/////////////////////////////////////////////////////////////////////////////
    /*
    const insertData = () => {
        const insert = techCompany.insertMany(data)
        return insert
    }
    const updateData = () => {
        const updateApple = techCompany.findOneAndUpdate(
            { name: 'Apple' },
            {
                $set: {
                    'name': 'Apple Inc',
                    'employees': 66000,
                    'active': true,
                    'CEO.name': 'Tim Cook',
                    'CEO.age': '56'
                }
            },
            {
                $push: {
                    products: {
                        $each: ['phones', 'tablets']
                    }
                }
            })
        const updateGoogle = techCompany.findOneAndUpdate(
            { name: 'Google' },
            {
                $set: {
                    'employees': 107100,
                    'active': true,
                    'CEO.name': 'Sundar Pichai',
                    'CEO.age': '47'
                }
            },
            {
                $push: {
                    products: {
                        $each: ['Android', 'ads', 'news', 'game']
                    }
                }
            })
        const update = Promise.all([updateGoogle, updateApple])
        return update
    }
    const findData = () => {
        const findAppleEmployees = techCompany.findOne(
            { name: 'Apple Inc' },
            {
                projection: {
                    _id: 0,
                    employees: 1
                }
            })
        const findGoogleEmployees = techCompany.findOne(
            { name: 'Google' },
            {
                projection: {
                    _id: 0,
                    employees: 1
                }
            })
        const find = Promise.all([findAppleEmployees, findGoogleEmployees])
        return find
    }
    insertData()
        .then(res => {
            assert.equal(data.length, res.insertedCount)
            console.log("inserted " + res.insertedCount)
            return updateData()
        })
        .then(res => {
            res.forEach(el => { console.log(el.lastErrorObject) })
            console.log("updated")
            return findData()
        })
        .then(res => {
            res.forEach(el => { console.log(el) })
            console.log("found ")
            return techCompany.drop()
        }).then(res => {
            console.log("Deleted collection! " + res)
        }).catch(err => {
            console.log("there is an err" + err)
        }).finally(() => {
            setTimeout(() => {
                client.close()
            }, 3000)
        })
        */
/////////////////////////////////////////////////////////////////////////////
////////////////////////////   ASYNC/AWAIT   //////////////////////////////// Done working!
/////////////////////////////////////////////////////////////////////////////
    /// insert data
    /*
    const insertData = async () => {
        try {
            const insert = await techCompany.insertMany(data)
            console.log('inserted')
        } catch (err) {
            assert.equal(err,null)
        }
    }
    /// update data
    const updateApple = async () => {
        try {
            const update = await techCompany.findOneAndUpdate(
                { name: 'Apple' },
                {
                    $set: {
                        'name': 'Apple Inc',
                        'employees': 66000,
                        'active': true,
                        'CEO.name': 'Tim Cook',
                        'CEO.age': '56'
                    }
                },
                {
                    $push: {
                        products: {
                            $each: ['phones', 'tablets']
                        }
                    }
                })
            console.log(update)
        } catch(err) {
            assert.equal(err, null)
        }
    }
    
    const updateGoogle = async() => {
        try{
            const update = await techCompany.findOneAndUpdate(
                { name: 'Google' },
                {
                    $set: {
                        'employees': 107100,
                        'active': true,
                        'CEO.name': 'Sundar Pichai',
                        'CEO.age': '47'
                    }
                },
                {
                    $push: {
                        products: {
                            $each: ['Android', 'ads', 'news', 'game']
                        }
                    }
                })
                console.log(update)
        } catch(err) {
            assert.equal(err,null)
        }
    }
    const findAppleEmployees = async() => {
        try {
            const response = await techCompany.findOne(
                {name:'Apple Inc'},
                {projections: {
                    _id:0,
                    employees:1
                    }
                }
            )
        } catch (err) {
            console.log('there is an error')
        }
    }
    const findGoogleEmployees = async() => {
        try {
            const response = await techCompany.findOne(
                {name:'Google'},
                {projections: {
                    _id:0,
                    employees:1
                    }
                }
            )
        } catch (err) {
            console.log('there is an error')
        }
    }
    /////// drop database
        const dropData = async () => {
        try {
            const drop = await techCompany.drop()
            console.log(drop + ' collection dropped')
        } catch (err) {
            console.log(err + 'Error!')
            }
        }
    insertData()
    updateApple()
    updateGoogle()
    findAppleEmployees()
    findGoogleEmployees()
    dropData()
    
    /////// Close client
    setTimeout(() => {
        client.close()
    }, 3000)
    */
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////   STRETCH (promise.all)      ///////////////////////// 
    /////////////////////////////////////////////////////////////////////////////
    /*
        const insertData = async () => {
            try {
                const promise = await techCompany.insertMany(data)
                console.log(promise.insertedCount)
            } catch (err) {
                console.log("there is error")
            }
        }
        const updateData = async () => {
            const updateApple = await techCompany.findOneAndUpdate(
                { name: 'Apple' },
                { $set: {
                        'name': 'Apple Inc',
                        'employees': 66000,
                        'active': true,
                        'CEO.name': 'Tim Cook',
                        'CEO.age': '56'
                    }
                },
                { $push: {
                        products: {
                            $each: ['phones', 'tablets']
                        }
                    }
                })
            const updateGoogle = await techCompany.findOneAndUpdate(
                { name: 'Google' },
                { $set: {
                        'employees': 107100,
                        'active': true,
                        'CEO.name': 'Sundar Pichai',
                        'CEO.age': '47'
                    }
                },
                { $push: {
                        products: {
                            $each: ['Android', 'ads', 'news', 'game']
                        }
                    }
                })
            const result = await Promise.all([updateApple, updateGoogle])
            console.log('update result is' + result)
        }
        const findData = async () => {
            const findAppleEmployees = await techCompany.findOne(
                { name: 'Apple Inc' },
                { projections: {
                        _id: 0,
                        employees: 1
                    }
                }
            ).then(res => console.log(res)
            ).catch(err => {
                assert.equal(err, null)
            })
    
            const findGoogleEmployees = await techCompany.findOne(
                { name: 'Google' },
                { projections: {
                        _id: 0,
                        employees: 1
                    }
                }
            ).then(res => console.log(res)
            ).catch(err => {
                assert.equal(err, null)
            })
            const result = await Promise.all([findAppleEmployees, findGoogleEmployees])
            console.log('find result is' + result)
        }
        const dropData = async () => {
            try {
                const drop = await techCompany.drop()
                console.log(drop + ' collection dropped')
            } catch (err) {
                console.log(err + 'Error!')
            } finally {
                client.close()
            }
        }
        async function sequence() {
            await insertData()
            await updateData()
            await findData()
            await dropData()
            return 'Done!'
        }
        sequence()
        */
})