const express = require('express')
const router = express.Router()
const {
    getElement,
    addElement,
    updateElement
} = require(('../controllers/elementController'))
router.get('/', getElement)
router.post('/', addElement)
router.put('/:id', updateElement)
module.exports = router
