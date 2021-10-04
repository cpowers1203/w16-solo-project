const express = require('express')
const router = express();
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Spot, Image } = require('../../db/models');
const { ResultWithContext } = require('express-validator/src/chain');


router.get('/', asyncHandler (async (req, res) => {
    let spots = await Spot.findAll()
    return res.json({spots})
}))
//post a new spot
router.post('/', requireAuth, asyncHandler(async (req, res) => {
    
    const { userId, address, city, state, country, name, price } = req.body
    const newSpot = await Spot.create(req.body)
    return res.json({newSpot})
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    let spotId = req.params.id
    let spot = await Spot.findByPk(spotId, {include: Image})
    return res.json(spot)
}))
//update a spot 
router.post('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    let spotId = req.params.id
    let oldSpot = await Spot.findByPk(spotId)
    const userId = oldSpot.userId
    const { address, city, state, country, name, price } = req.body
    const spot = { spotId, userId, address, city, state, country, name, price }
    
    const validatorErrors = validationResult(req)
    if (validatorErrors.isEmpty()) {
        if (userId === req.user.id) {
            return await oldSpot.update(spot)
        }
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        return res.json(errors)
    }
}))

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id)
    const userId = spot.userId
    if (userId === req.user.id) {
        return await spot.destroy()
    }
}))

router.post('/:id(\\d+)/images', requireAuth, asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id)
    spotId = spot.id
    const userId = spot.userId
    const {spotId, url} = req.body
    if (userId === req.user.id) {
        const newImage = await Image.create(req.body)
        return res.json({newImage})
    }
}))

module.exports = router