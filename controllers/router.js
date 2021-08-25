const router = require('express').Router()
const Events = require('../models/events')

router.get('/', (request, response) => {
    Events
        .find({})
        .then(event => {
            response.json(event)
        })
})

router.post('/', (request, response) => {
    const event = new Events(request.body)

    event
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

module.exports = router