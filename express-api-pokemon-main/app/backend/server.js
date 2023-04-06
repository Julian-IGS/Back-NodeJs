// Import des modules
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const errorHandler = require('./middleware/errorHandler')
const colors = require('colors')
const cors = require('cors');
// Connexion à MongoDB
const connectDB = require('./config/db')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const swaggerAutogen = require('swagger-autogen')()
connectDB()
// Initialisation d'Express
const app = express()
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)
)

app.use(cors({
    origin: '*',

    methods: [
        'GET',
        'POST',
        'DELETE',
        'PATCH'
    ],
    allowedHeaders: [
        'Content-Type',
    ],
}));

// Accepter les données envoyées par formulaire
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//Appel middleWare
app.use(errorHandler)


// Routes
app.use('/api/pokemon', require('./routes/pokemonRoutes'))
app.use('/api/ability', require('./routes/abilityRoutes'))
app.use('/api/element', require('./routes/elementRoutes'))

// Lancement du serveur
app.listen(port, () => {
    console.log(`Server started on ${port}`.green)
})