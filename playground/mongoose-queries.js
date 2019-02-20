const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c6cc9ab00134c2788e815011';
var id = '5c6b7a1f06e6b8334822c408';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By ID',todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));