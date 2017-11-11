const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Address = require('./address')
const Person = require('./person')


const AppartmentSchema = mongoose.Schema({
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Address',
        required:true
    },
    numRooms: {
        type:Number,
        default: 1
    },
   rent: {
       type: Number,
       required: true
   },
   sqm: {
       type: Number,
       default: 20
   },
   landlord:{
       type: mongoose.Schema.Types.ObjectId,
       ref:'Person',
       required:true
   },
   isRented:{
       type: Boolean,
       default:false
   }
})

AppartmentSchema.plugin(AutoIncrement, {inc_field: 'appartmentId'})

module.exports = mongoose.model('Appartment', AppartmentSchema)