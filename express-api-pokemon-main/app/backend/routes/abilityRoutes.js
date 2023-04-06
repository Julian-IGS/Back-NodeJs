const express = require('express')
const router = express.Router()
const {
    getAllAbilities,
    updateAbility,
    addAbility
} = require(('../controllers/abilityController'))
router.get('/', getAllAbilities)
router.post('/', addAbility)
router.put('/:id', updateAbility)
module.exports = router