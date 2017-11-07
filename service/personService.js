const fs = require('fs')

const Person = require('../model/person')

const dbPath = `${__dirname}/../database/personDB.json`

async function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const persons = JSON.parse(file).map(Person.create)

            resolve(persons)
        })
    })
}

async function findAllLandlords() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err)
            return reject(err)

            const persons = JSON.parse(file).map(Person.create)
            let landlords = persons.filter(person => person.isLandlord)
            resolve(landlords)
        })
    })
}

async function findLandlordsByLastname(lastname) {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err)
            return reject(err)

            const persons = JSON.parse(file).map(Person.create)
            let landlordsByLastname = persons.filter(person => person.isLandlord && person.lastname == lastname)
            resolve(landlordsByLastname)
        })
    })
}

async function add(person) {
    const allPersons = await findAll()
    const lastPerson = allPersons[allPersons.length - 1]
    const lastPersonsId = lastPerson && lastPerson.id || 0
    person.id = lastPersonsId + 1

    person = Person.create(person)
    allPersons.push(person)

    await saveAll(allPersons)

    return person
}

async function del(personId) {
    const allPersons = await findAll()
    const personIndex = allPersons.findIndex(p => p.id == personId)
    if (personIndex < 0) return

    allPersons.splice(personIndex, 1)

    saveAll(allPersons)
}

async function find(personId) {
    const allPersons = await findAll()

    return allPersons.find(p => p.id == personId)
}

async function saveAll(persons) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(persons), (err, file) => {
            if (err) return reject(err)

            resolve()
        })
    })
}

module.exports = {
    findAll,
    findAllLandlords,
    findLandlordsByLastname,
    find,
    add,
    del
}
