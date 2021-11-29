const Sequelize = require('sequelize')
const { validate } = require('../utils/database')
const usuario_aeropuerto = (sequelize)=>{
    sequelize.define('usuario_aeropuerto', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        correo:{
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        dob:{
            type: Sequelize.DATE,
            allowNull: false,
        }
    })
}
module.exports = usuario_aeropuerto