'use strict'
const asyncHandler = require('express-async-handler')
const PokemonModel = require('../models/pokemonModel')

const getAllPokemons = asyncHandler(async (req, res, next) => {
    let pokemons
    try {
        pokemons = await PokemonModel.find().populate('learningSkills').populate('elements')
    } catch (err) {
        // Transmet l'erreur au middleware errorHandler
        return next(err)
    }
    res.status(200).json(pokemons)
})

const getPokemon = asyncHandler(async (req, res, next) => {
    let pokemon
    try {
        pokemon = await PokemonModel.findById(req.params.id).populate('learningSkills').populate('elements')
    } catch (err) {
        return next(err)
    }
    res.status(200).json(pokemon)
})

const addPokemon = asyncHandler(async (req, res, next) => {
    let pokemons
    try {
        pokemons = await PokemonModel.create(req.body)
    } catch (err) {
        return next(err)
    }
    res.status(200).json(pokemons)
})

const updatePokemon = asyncHandler(async (req, res, next) => {
    let updatedPokemon
    try {
        updatedPokemon = await PokemonModel.findByIdAndUpdate(req.params.id, req.body)
    } catch (err) {
        return next(err)
    }
    res.status(200).json(updatedPokemon)
});

const deletePokemon = asyncHandler(async (req, res, next) => {
    try {
        await PokemonModel.findByIdAndDelete(req.params.id)
    } catch (err) {
        return next(err)
    }
    res.status(204).json('Pokemon has been delete')
})


module.exports = {
    getAllPokemons,
    getPokemon,
    addPokemon,
    updatePokemon,
    deletePokemon
}