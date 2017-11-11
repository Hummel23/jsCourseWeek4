const Person = require('../model/person')

async function findAll() {
    return Person.find();
}

async function findLandlordsByLastname(lastname) {
    return Person.findOne({lastname}).populate('Appartments').populate('Address');
}

async function find(id) {
    return Person.find({id}).populate('Appartments').populate('Address');
}

async function add(person) {
    Person.create(person);
}

async function del(id) {
    Person.remove({id});
}

module.exports = {
    findAll,
    findLandlordsByLastname,
    find,
    add,
    del
}
