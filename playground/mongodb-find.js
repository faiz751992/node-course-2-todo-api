const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c6a6c2d14cf261ffc970ed7')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    db.collection('Users').find({
        age: 25
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Users', err);
    });

    db.collection('Users').find().count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Users', err);
    });

    // client.close();
});