const express = require('express')
const router = express();
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Spot } = require('../../db/models')

router.get('/', asyncHandler, async (req, res) => {
    await Spot.findAll({
        where: Spot.city
    })
})