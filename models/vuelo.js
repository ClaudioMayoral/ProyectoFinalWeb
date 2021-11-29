const Sequelize = require('sequelize')

const vuelo = (sequelize)=>{
    sequelize.define('vuelo',{
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        lugares: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        pais_origen: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        pais_destino: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        hora_llegada: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        hora_salida: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
}
module.exports = vuelo