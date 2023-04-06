'use strict'
/**
 * Import modules
 */
const fs = require('fs')

/**
 * Import data
 */
const ressource = require('../ressource/constant')


/**
 * Création elements JSON
 * @param ressource
 */
function createTypeJson(ressource) {
    let result = ressource.TYPES.map((type) => {

        delete type?.chinese
        delete type?.japanese
        return type
    })
    // console.log(result)
    fs.writeFileSync('../ressource/types.json', JSON.stringify(result))
}

/**
 * Création abilities JSON
 * @param ressource
 */
function createAbilitiesJson(ressource) {

    let result = ressource.ABILITIES.map((ability) => {

        ability.name = ability?.ename
        ability.description = `The ${ability.name} skill has a power of ${ability.power} and an accuracy of ${ability.accuracy}`
        delete ability?.category
        delete ability?.cname
        delete ability?.jname
        delete ability?.id
        delete ability?.ename
        return ability
    })
    fs.writeFileSync('../ressource/abilities.json', JSON.stringify(result))
}

// createTypeJson(ressource)
// createAbilitiesJson(ressource)