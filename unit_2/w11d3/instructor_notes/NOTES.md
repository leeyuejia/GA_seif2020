# MongoDB - More Operations

## Lesson Objectives
1. Explain Field Selection
1. Explain Ordering
1. Explain Paging
1. Explain Count
1. Import Data into MongoDB
1. Explain Mongo Node.JS Driver
1. CRUD Operations in MongoDB

## Explain Field Selection
1. `db.employees.find({}, {name: 1});`
	- 1 for include
	- 0 for exclude
1. `{name:1, _id: 0}` excludes the id

## Explain Ordering
1. `db.employees.find().sort({name: 1, salary: -1})`
	- 1 for ascending
	- -1 for descending
	- won't sort on large set without index

## Explain Paging
1. `db.employees.find().sort({weight: -1}).limit(2).skip(1)`
	- can help avoid issues when sorting on large un-indexed fields

## Explain Count
1. `db.employees.find({salary: {$gt: 50}}).count()`
	- usual count is just a shortcut to this

## Import Data into MongoDB
[Mongo Guide](https://docs.mongodb.com/guides/server/import/)

## CRUD Operations in MongoDB
[Mongo Guide](https://docs.mongodb.com/guides/server/insert/)

## Explain MongoDB Node.JS Driver
[Github](https://github.com/mongodb/node-mongodb-native)