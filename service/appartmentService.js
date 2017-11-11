const Appartment = require('../model/appartment')
const AddressService = require('./addressService')

async function findAll() {
    return Appartment.find();
}

async function find(appartmentId) {
    return Appartment.find({appartmentId}).populate('Address');
}

async function add(appartment) {
    return Appartment.create(appartment);
}

async function del(appartmentId) {
    const address = Appartment.find({appartmentId}).address;
    AddressService.del(address.id);

    return Appartment.remove({appartmentId});
}

module.exports = {
    findAll,
    find,
    add,
    del
}
