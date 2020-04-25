//CRUD 

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjecID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: "Work Out"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').deleteMany({
    //     age: 37
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

})


//EXAMPLE WAYS TO ADD/CREATE COLLECTIONS---- GOES INSIDE THE ABOVE FUNCTION 
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Grocery Shop',
    //         completed: false
    //     },
    //     {
    //         description: 'Work Out',
    //         completed: true
    //     },
    //     {
    //         description: 'Call Mom',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertOne({
    //     // _id: id,
    //     name: 'Carla',
    //     age: 36
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Olive',
    //         age: 27
    //     },
    //     {
    //         name: 'Adam',
    //         age: 35
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

    // EXAMPLE WAYS TO READ
    // db.collection('users').findOne({ _id: new ObjectID('5ea0ca170b8145e71b93a0cb') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5ea2ec8008850cf9dc5d8518")}, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, task) => {
    //     console.log(task)
    // })

    // db.collection('users').find({ age: 36 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 36 }).count((error, count) => {
    //     console.log(count)
    // })

    // EXAMPLES TO UPDATE

    // db.collection('tasks').updateMany({ 
    //     completed: false 
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ea0ca170b8145e71b93a0cb")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })