const path = require("path")
//Importar express
const express = require('express')
//Crear la aplicación web
const app = express()

const sequelize = require('./utils/database')
const boleto = require('./routes/boleto/blueprint')
const usuario = require('./routes/usuario/blueprint')
const vuelo = require('./routes/vuelo/blueprint')

//Middleware
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

app.use("/boleto",boleto)
app.use("/usuario",usuario)
app.use("/vuelo",vuelo)

//Lanzar la aplicación para escuchar peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8083,()=>{
            console.log("Aplicación web en línea en el puerto 8083")
    })
    })
    .catch(err=>console.log(err))