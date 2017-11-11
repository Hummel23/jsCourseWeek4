const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)


const AddressSchema = mongoose.Schema({
    street: {
        type:String,
        required:true,
    }, 
    postalCode: {
        type:Number,
    }, 
    area: {
        type:String,
        required:true,
    }, 
    city: {
        type:String,
        required:true,
    }
})

AddressSchema.plugin(AutoIncrement, {inc_field: 'addressId'})

module.exports = mongoose.model('Address', AddressSchema)