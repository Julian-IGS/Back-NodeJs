'use strict'
const MongoError = require('mongodb').MongoError
const {ValidationError} = require('mongoose')

class HttpError extends Error {
    constructor(statusCode, message) {
        super(message)
        this.statusCode = statusCode
    }
}

module.exports = function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    if (err instanceof MongoError) {
        // Gestion des erreurs MongoDB
        if (err.code === 11000) {
            // Erreur de doublon
            return res.status(400).json({message: 'Cette entrée existe déjà dans la base de données'})
        }
        // Autres erreurs MongoDB
        return res.status(500).json({message: 'Erreur de base de données'})
    } else if (err instanceof ValidationError) {
        // Gestion des erreurs de validation Mongoose
        return res.status(400).json({message: 'Données de formulaire non valides', errors: err.errors})
    } else if (err instanceof HttpError) {
        // Gestion des erreurs HTTP
        return res.status(err.statusCode).json({message: err.message})
    }
    // Autres erreurs
    res.status(500);
    res.render('error', {error: err})
}
