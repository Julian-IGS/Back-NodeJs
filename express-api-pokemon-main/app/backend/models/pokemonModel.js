'use strict'
// Import
const mongoose = require("mongoose")
const Element = require('../models/elementModel')
const Ability = require('../models/abilityModel')

// pokemonModel
const PokemonSchema = new mongoose.Schema({
        pokedexId: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        stats: {
            hp: {
                type: Number,
                required: true
            },
            attack: {
                type: Number,
                required: true
            },
            defense: {
                type: Number,
                required: true
            },
            special_attack: {
                type: Number,
                required: true
            },
            special_defense: {
                type: Number,
                required: true
            },
            speed: {
                type: Number,
                required: true
            },
        },
        picture: {
            type: String,
            required: false
        },
        elements: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Element',
            required: true
        },
        learningSkills: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ability',
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Pokemon', PokemonSchema)
