'use strict'
const asyncHandler = require('express-async-handler')
const ElementModel = require('../models/elementModel')


const getElement = asyncHandler(async (req, res, next) => {
    let element
    try {
        // Traitement de la route ici
        element = await ElementModel.find()
    } catch (err) {
        // Transmet l'erreur au middleware errorHandler
        return next(err)
    }
    res.status(200).json(element)
})

const updateElement = asyncHandler(async (req, res, next) => {
    let updatedElement
    try {
        updatedElement = await ElementModel.findByIdAndUpdate(req.params.id, req.body)
    } catch (err) {
        return next(err)
    }
    res.status(200).json(updatedElement)
})

const addElement = asyncHandler(async (req, res, next) => {
    let addedElement
    try {
        addedElement = await ElementModel.create(req.body)
    } catch (err) {
        return next(err)
    }
    res.status(200).json(addedElement)
})

module.exports = {
    getElement,
    updateElement,
    addElement
}