'use strict'
// Import
const pokemonsData = require('../ressource/pokemons.json')
const elementsData = require('../ressource/types.json')
const abilitiesData = require('../ressource/abilities.json')
const port = process.env.PORT || 5000

function addData(data, api) {
    console.log('abilitiesData : ', port, api)
    const URL = `http://localhost:${port}/${api}`
    data.forEach(e => {
        fetch(URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(e)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    })
}

// Approvisionnement de la DB, pokemon en dernier !

// addData(elementsData, 'api/element')
// addData(abilitiesData, 'api/ability')
// addData(pokemonsData, 'api/pokemon')
