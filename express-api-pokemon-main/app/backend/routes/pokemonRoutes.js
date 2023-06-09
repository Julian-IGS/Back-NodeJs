const express = require('express')
const router = express.Router()
const {
    getAllPokemons,
    getPokemon,
    addPokemon,
    updatePokemon,
    deletePokemon
} = require(('../controllers/pokemonController'))
router.get('/', getAllPokemons)
router.get('/:id', getPokemon)
router.post('/', addPokemon)
router.put('/:id', updatePokemon)
router.delete('/:id', deletePokemon)
module.exports = router
