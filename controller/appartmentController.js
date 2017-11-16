const express = require('express')
const router = express.Router()

const AppartmentService = require('../service/appartmentService')
const PersonService = require('../service/personService')

router.get('/', async (req, res, next) => {
    res.send(await AppartmentService.findAll())
});

router.get('/all', async (req, res, next) => {
    const appartments = await AppartmentService.findAll()
    res.render('appartmentList', {appartments})
});

router.get('/create', async (req, res, next) => {
    res.render('newAppartment', {id:1})
});

router.get('/:id', async (req, res, next) => {
    const appartment = await AppartmentService.find(req.params.id)
    res.render('appartmentDetail', {appartment})
});

router.post('/add/:id', async (req, res, next) => {
    const landlord = await PersonService.find(req.params.id);
    let appartment = await AppartmentService.add({...req.body, landlord});

    
    landlord.appartments.addToSet(appartment)
    const updatedLandlord = await landlord.save();
    
    res.send(appartment) 
    //res.redirect('/appartment/create');
})

router.delete('/:id', async (req, res, next) => {
    await AppartmentService.del(req.params.id)
    res.send('ok!')
})

module.exports = router
