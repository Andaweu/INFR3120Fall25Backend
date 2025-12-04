let mongoose = require('mongoose')
let passportLocalMongoose = require('passport-local-mongoose')

let User = mongoose.Schema({
    username:
    {
        type:String,
        default:'',
        trim:true,
        required:'Username is required'
    },
    password:
    {
        type:String,
        default:'',
        trim:true,
        required:'Password is required'
    },
    email:
    {
        type:String,
        default:'',
        trim:true,
        required:'Email address is required'
    },
    displayName:
    {
        type:String,
        default:'',
        trim:true,
        required:'Display name is required'
    },
    created:
    {
        type:Date,
        default:Date.now
    },
    updated:
    {
        type:Date,
        default:Date.now
    },
},
{ //Stores users in the same database as Cars, but in a different collection
    collection:"user"
})

let options = {MissingPasswordError:'! Wrong or Missing Password !'};
User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User); //Means this file will be accessible throughout project

