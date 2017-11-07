const express = require('express')
const router = express.Router()

const PersonService = require('../service/personService')

router.get('/', async (req, res, next) => {
    res.send(await PersonService.findAll())
})

router.get('/all', async (req, res, next) => {
    const people = await PersonService.findAll()
    res.render('personList', {people})
})

router.get('/all/landlords', async (req, res, next) => {
    const landlords = await PersonService.findAllLandlords()
    res.render('landlordList', {landlords})
})

router.get('/:id', async (req, res, next) => {
    const person = await PersonService.find(req.params.id)

    res.render('personDetail', {person})
})

router.get('/:lastname', async (req, res, next) => {
    const person = await PersonService.findLandlordsByLastname(req.params.lastname)

    res.render('landlordListByLastname', {person})
})

router.post('/', async (req, res, next) => {
    const person = await PersonService.add(req.body)

    res.send(person)
})

router.delete('/:id', async (req, res, next) => {
    await PersonService.del(req.params.id)

    res.send('ok!')
})

module.exports = router
