const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Appartment = require('./appartment')


const PersonSchema = mongoose.Schema({
    firstname: {
        type:String,
        required:true,
    }, 
    lastname: {
        type:String,
        required:true,
    }, 
    age: {
        type:Number,
        default: 0
    },
    appartments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Appartment',
    }]
})

PersonSchema.plugin(AutoIncrement, {inc_field: 'id'})

module.exports = mongoose.model('Person', PersonSchema)