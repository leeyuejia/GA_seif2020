# Schema Validation

## Lesson Objectives

1. Data Modeling Introduction
1. Schema Governance
1. Foreign Keys

## Data Modeling Introduction¶

[Mongo Guide](https://docs.mongodb.com/master/core/schema-validation/)

## Schema Governance

While MongoDB’s flexible schema is a powerful feature for
many users, there are situations where strict guarantees on
data structure and content are required. Using [Schema Validation](https://docs.mongodb.com/master/core/schema-validation/#json-schema), developers and DBAs can define a prescribed
document structure for each collection, which can reject
any documents that do not conform to it. With schema
validation, MongoDB enforces strict controls over JSON
data:

* **Complete schema governance**. Administrators can

define when additional fields are allowed to be added to
a document, and specify a schema on array elements
including nested arrays.

* **Tunable controls**. Administrators have the flexibility to

tune schema validation according to use case – for
example, if a document fails to comply with the defined
structure, it can be either be *rejected*, or still written to
the collection while logging a *warning* message.
Structure can be imposed on just a subset of fields –
for example requiring a valid customer a name and
address, while others fields can be freeform, such as
social media handle and cellphone number. And of
course, validation can be turned off entirely, allowing
complete schema flexibility, which is especially useful
during the development phase of the application.

* **Queryable**. The schema definition can be used by any

query to inspect document structure and content. For
example, DBAs can identify all documents that do not
conform to a prescribed schema.

As an example, you can add a JSON Schema to enforce
these rules:

* Each document must contain a field named lineItems
* The document may optionally contain other fields
* lineItems must be an array where each element:
    - Must contain a title (string), price (number no smaller than 0)
    - May optionally contain a boolean named purchased
    - Must contain no further fields

``` js
db.createCollection("orders", {
    validator: {
        $jsonSchema: {
            properties: {
                lineItems: {
                    type: "array",
                    items: {
                        properties: {
                            title: {
                                type: "string"
                            },
                            price: {
                                type: "number",
                                minimum: 0.0
                            },
                            purchased: {
                                type: "boolean"
                            }
                        },
                        required: [
                            "title",
                            "price"
                        ],
                        additionalProperties: false
                    }
                }
            },
            required: [
                "lineItems"
            ]
        }
    }
})
```

If you execute the following command in the mongo shell, it will show an error.

``` shell
db.orders.insert({ 
    lineItems: [{ 
        title: "hamburger", price: 10, purchased: true, quantity: 1
    }] 
});
```

Likewise, if we do it in the Node.js Mongo Driver, it will throw an error too.

``` js
 try {
     const result = await collection.insertOne({
         lineItems: [{
             title: 'hamburger',
             price: 10,
             purchased: true,
             quantity: 1
         }]
     });
     assert.equal(result.insertedCount, 1);
 } catch (err) {
     // assert.equal(null, err);
     console.log(err.message);
 } finally {
     client.close();
 }
```
