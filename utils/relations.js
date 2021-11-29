function aplicarRelaciones(sequelize){
    console.log(sequelize.models)
    const boleto = sequelize.models.playlist
    const usuario = sequelize.models.usuario_aeropuerto
    const vuelo = sequelize.models.vuelo

    usuario.belongsToMany(vuelo, {through: boleto})
    vuelo.belongsToMany(usuario, {through: boleto})
}

module.exports = {aplicarRelaciones}