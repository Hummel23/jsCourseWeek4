const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('./database/database')

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.set('view engine', 'pug')

const person = require('./controller/personController')
const appartment = require('./controller/appartmentController')


app.use('/person', person)
app.use('/appartment', appartment)


app.get('/',async (req, res, next) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server listening.')
})
