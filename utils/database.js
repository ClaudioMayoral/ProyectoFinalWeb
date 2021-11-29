const Sequelize = require("sequelize")

const sequelize = new Sequelize('user4DB', 'user4', 'root', {
    dialect: 'mysql',
    host: '54.198.161.35',
    define: {
        timestamp: false,
        freezeTableName: true
    }
})


const modelDefiners = [
    require("../models/boleto"),
    require("../models/usuario_aeropuerto"),
    require("../models/vuelo"),
]

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

module.exports = sequelize