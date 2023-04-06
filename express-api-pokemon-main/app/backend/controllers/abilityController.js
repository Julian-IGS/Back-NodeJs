'use strict'
const asyncHandler = require('express-async-handler')
const AbilityModel = require('../models/abilityModel')

const getAllAbilities = asyncHandler(async (req, res, next) => {
    let abilities
    try {
        // Traitement de la route ici
        abilities = await AbilityModel.find()
    } catch (err) {
        // Transmet l'erreur au middleware errorHandler
        return next(err)
    }
    res.status(200).json(abilities)
})

const updateAbility = asyncHandler(async (req, res, next) => {
    let updatedAbility
    try {
        updatedAbility = await AbilityModel.findByIdAndUpdate(req.params.id, req.body)
    } catch (err) {
        return next(err)
    }
    res.status(200).json(updatedAbility)
})
const addAbility = asyncHandler(async (req, res, next) => {
    let addAbility
    try {
        addAbility = await AbilityModel.create(req.body)
    } catch (err) {
        return next(err)
    }
    res.status(200).json(addAbility)
})

module.exports = {
    getAllAbilities,
    updateAbility,
    addAbility
}