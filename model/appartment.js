const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Person = require('./person')


const AppartmentSchema = mongoose.Schema({
    address:{
        street: String,
        postalCode: Number,
        city: String
    },
    numRooms: {
        type:Number,
        default: 1
    },
   rent: {
       type: Number,
   },
   sqm: {
       type: Number,
       default: 20
   },
   landlord:{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Person',
   },
   isRented:{
       type: Boolean,
       default:false
   }
})

AppartmentSchema.plugin(AutoIncrement, {inc_field: 'appartmentId'})

module.exports = mongoose.model('Appartment', AppartmentSchema)