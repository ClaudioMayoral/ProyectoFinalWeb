const Sequelize = require('sequelize')

const boleto = (sequelize)=>{
    sequelize.define('boleto', {
        id_vuelo: {
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true,
            references: {
                model: 'vuelo',
                key: 'id'
            }
        },
        id_usuario: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references:{
                model: 'usuario_aeropuerto',
                key: 'id'
            }
        }
    })
}
module.exports = boleto