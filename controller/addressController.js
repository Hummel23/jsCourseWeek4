const express = require('express')
const router = express.Router()

const AddressService = require('../service/addressService')

router.get('/', async (req, res, next) => {
    res.send(await AddressService.findAll())
})

router.get('/:id', async (req, res, next) => {
    return await AddressService.find(req.params.id);
})

router.post('/', async (req, res, next) => {
    return await AddressService.add(req.body);
})

router.delete('/:id', async (req, res, next) => {
    await AddressService.del(req.params.id)
    res.send('ok!')
})

module.exports = router
