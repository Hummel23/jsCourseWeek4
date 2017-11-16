const Appartment = require('../model/appartment')

async function findAll() {
    return Appartment.find();
}

async function find(appartmentId) {
    return Appartment.findOne({appartmentId}).populate('landlord');
}

async function add(appartment) {
    return Appartment.create(appartment);
}


async function del(appartmentId) {
    return Appartment.remove({appartmentId});
}

module.exports = {
    findAll,
    find,
    add,
    del
}
