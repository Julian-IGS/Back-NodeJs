'use strict'
// Import
const mongoose = require("mongoose")

// abilityModel
const AbilitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    accuracy: {
        type: Number,
        required: false
    },
    power: {
        type: Number,
        required: false
    },
    pp: {
        type: Number,
        required: true
    },
    elements: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Element',
        required: true
    },
    description: {
        type: String,
        required: false
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Ability', AbilitySchema)

