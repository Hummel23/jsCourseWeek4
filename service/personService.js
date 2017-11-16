const Person = require('../model/person')

async function findAll() {
    return Person.find();
}

async function findLandlordsByLastname(lastname) {
    return Person.findOne({lastname}).populate('appartments');
}

async function find(id) {
    return Person.findOne({id}).populate('appartments');
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
