const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email:{
        type:String,
        required: 'Enter email'
    },
    password:{
        type:String,
        required: 'Enter password'
    }
})

module.exports = mongoose.model('User',UserSchema)