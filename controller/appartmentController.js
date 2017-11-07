const express = require('express')
const router = express.Router()

const AppartmentService = require('../service/appartmentService')

router.get('/', async (req, res, next) => {
    res.send(await AppartmentService.findAll())
})

router.get('/all', async (req, res, next) => {
    const appartments = await AppartmentService.findAll()
    res.render('appartmentList', {appartments})
})

router.get('/all/forRent', async (req, res, next) => {
    const appartmentsForRent = await AppartmentService.findAppartmentsToRent()
    res.render('appartmentsForRentList', {appartmentsForRent})
})

router.get('/:id', async (req, res, next) => {
    const appartment = await AppartmentService.find(req.params.id)

    res.render('appartmentDetail', {appartment})
})

router.get('/all/area/:area', async (req, res, next) => {
    const appartmentsInArea = await AppartmentService.findAppartmentsByArea(req.params.area)
    res.render('appartmentsInAreaList', {appartmentsInArea})
})

router.get('/all/landlord/:landlordId', async (req, res, next) => {
    const appartmentsFromLandlord = await AppartmentService.findAppartmentsByLandlord(req.params.landlordId)
    res.render('appartmentsFromLandlordList', {appartmentsFromLandlord})
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
