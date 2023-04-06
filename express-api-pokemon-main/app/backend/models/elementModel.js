'use strict'
// Import
const mongoose = require("mongoose")

// ElementModel
const ElementSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        }
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('Element', ElementSchema);
