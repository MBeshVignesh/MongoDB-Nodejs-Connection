const mongoose = require('mongoose')

const Schema = mongoose.Schema;

    const ContactSchema = new Schema({
    firstName:{
        type:String,
        required: 'Enter first Name'
    },
    lastName:{
        type:String,
        required: 'Enter last Name'
    },
    email: {
        type:String
    },
    company: {
        type:String
    },
    phone: {
        type:Number
    },
    created_date: {
        type:Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Alien',ContactSchema)