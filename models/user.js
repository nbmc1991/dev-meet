const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
     required:"Username is Required"
    },
    language: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
        require: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    email : {
        type: String, 
       unique :true, 
       match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.models.User || mongoose.model('User', userSchema)


module.exports = User;
