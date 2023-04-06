const mongoose = require('mongoose')
// Couleur dans la console
const colors = require('colors')
const connectDB = async () => {
    try {
        const cn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${cn.connection.host}`.cyan)
    } catch (err) {
        console.log('err : ', err)
        process.exit(1)
    }
}
module.exports = connectDB
