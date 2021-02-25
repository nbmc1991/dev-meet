const mongoose = require('mongoose');
const db     = require('../models/user');

mongoose.connect('mongodb://localhost/devemeet', {
    useNewUrlParser: true,
    useFindAndModify: false,
});

let userSeed = [
{
    username: 'nbmc1991',
    password: 'password123',
    email: 'nbmc1991@gmail.com',
    userCreated: new Date(Date.now())
},
{
    username: 'dennyDvjncj',
    password: 'password123',
    email: 'dd@gmail.com',
    userCreated: new Date(Date.now())
}
];

// db.User.remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
