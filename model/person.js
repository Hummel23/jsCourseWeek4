const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)


const PersonSchema = mongoose.Schema({
    fristname: {
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
        ref:'Appartments',
    }]
})

PersonSchema.plugin(AutoIncrement, {inc_field: 'id'})

module.exports = mongoose.model('Person', PersonSchema)