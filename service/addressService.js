const Address = require('../model/address')

async function findAll() {
    return Address.find();
}

async function find(addressId){
    return Address.find({addressId});
}

async function add(address){
    return Address.create(address);
}

async function del(addressId) {
    return Address.remove({addressId});
}

module.exports = {
    findAll,
    find,
    add,
    del
}
