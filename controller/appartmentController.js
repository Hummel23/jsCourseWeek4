const express = require('express')
const router = express.Router()

const AppartmentService = require('../service/appartmentService')
const AddressService = require('../service/addressService')

router.get('/', async (req, res, next) => {
    res.send(await AppartmentService.findAll())
})

router.get('/all', async (req, res, next) => {
    const appartments = await AppartmentService.findAll()
    res.render('appartmentList', {appartments})
})

router.get('/:id', async (req, res, next) => {
    const appartment = await AppartmentService.find(req.params.id)
    res.render('appartmentDetail', {appartment})
})

router.post('/', async (req, res, next) => {
    const appartment = await AppartmentService.add(req.body)
    res.send(appartment)
})

router.delete('/:id', async (req, res, next) => {
    await AppartmentService.del(req.params.id)
    res.send('ok!')
})

module.exports = router
