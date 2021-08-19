const express = require('express')
const router = express();
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Spot } = require('../../db/models');
const { ResultWithContext } = require('express-validator/src/chain');


router.get('/', asyncHandler (async (req, res) => {
    let spots = await Spot.findAll()
    return res.json({spots})
}))

router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const {id: userId} = req.user
    const { address, city, state, country, name, price } = req.body
    const newSpot = await Spot.create({userId, address, city, state, country,name, price})
    return res.redirect(`/spots/${newSpot.id}`)
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    let spotId = req.params.id
    let spot = await Spot.findByPk(spotId)
    return res.json({spot})
}))

router.post('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    let spotId = req.params.id
    let oldSpot = await Spot.findByPk(spotId)
    const userId = spot.userId
    const { address, city, state, country, name, price } = req.body
    const spot = { spotId, userId, address, city, state, country, name, price }
    
    const validatorErrors = validationResult(req)
    if (validatorErrors.isEmpty()) {
        
    }
}))

module.exports = router