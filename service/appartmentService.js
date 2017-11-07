const fs = require('fs')

const Appartment = require('../model/appartment')

const dbPath = `${__dirname}/../database/appartmentDB.json`

async function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const appartments = JSON.parse(file).map(Appartment.create)

            resolve(appartments)
        })
    })
}

async function findAppartmentsByLandlord(landlordId) {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const appartments = JSON.parse(file).map(Appartment.create)
            let appartmentsFromlandlord = appartments.filter(appartment => appartment.landlordId == landlordId)
            resolve(appartmentsFromlandlord)
        })
    })
}

async function findAppartmentsByArea(area) {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const appartments = JSON.parse(file).map(Appartment.create)
            let appartmentsInArea = appartments.filter(appartment => appartment.area == area)
            resolve(appartmentsInArea)
        })
    })
}

async function findAppartmentsToRent() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const appartments = JSON.parse(file).map(Appartment.create)
            let appartmentsForRent = appartments.filter(appartment => appartment.isRented == false)
            resolve(appartmentsForRent)
        })
    })
}

async function add(appartment) {
    const allAppartments = await findAll()
    const lastAppartment = allAppartments[allAppartments.length - 1]
    const lastAppartmentId = lastAppartment && lastAppartment.id || 0
    appartment.id = lastAppartmentId + 1

    appartment = Appartment.create(appartment)
    allAppartments.push(appartment)

    await saveAll(allAppartments)

    return appartment
}

async function del(appartmentId) {
    const allAppartments = await findAll()
    const appartmentIndex = allAppartments.findIndex(appartment => appartment.id == appartmentId)
    if (appartmentIndex < 0) return

    allAppartments.splice(appartmentIndex, 1)

    saveAll(allAppartments)
}

async function find(appartmentId) {
    const allAppartments = await findAll()

    return allAppartments.find(appartment => appartment.id == appartmentId)
}

async function saveAll(appartments) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(appartments), (err, file) => {
            if (err) return reject(err)

            resolve()
        })
    })
}

module.exports = {
    findAll,
    findAppartmentsByArea,
    findAppartmentsByLandlord,
    findAppartmentsToRent,
    find,
    add,
    del
}
