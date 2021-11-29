const modeloVuelo = require('../../utils/database').models.vuelo
const modeloBoleto = require('../../utils/database').models.boleto
const mensajes = require('../../utils/exceptions')


exports.getVuelo = (req, res)=>{
    modeloVuelo.findAll({
        where:{
            id: req.params.id
        }
    }).then(vuelo=>{
        res.json(vuelo[0])
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.createVuelo = (req, res)=>{

    modeloVuelo.create({
        lugares: req.body.lugares,
        pais_origen: req.body.paisOrigen,
        pais_destino: req.body.paisDestino,
        hora_llegada: req.body.horaLlegada,
        hora_salida: req.body.horaSalida,
    }).then(result=>{
        res.json({
            estado: "Lugar agregado exitosamente"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"ERROR"})
    })
}


exports.updateVuelo = (req, res)=>{
    modeloVuelo.update({
        lugares: req.body.lugares,
        pais_origen: req.body.paisOrigen,
        pais_destino: req.body.paisDestino,
        hora_llegada: req.body.hora_llegada,
        hora_salida: req.body.hora_salida,
    },{
        where:{
            id: req.params.id
        }
    })
    .then(()=>{
        res.json({estado:mensajes.SuccessUpdate})
    })
    .catch((err)=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.deleteVuelo = (req, res)=>{

    modeloBoleto.destroy({
        where:{
            id_vuelo: req.params.id
        }
    }).then(() =>{
        modeloVuelo.destroy({
            where:{
                id: req.params.id
            } 
         })
         .then(() =>{
             res.json({estado: mensajes.SuccessDelete})
         })
         .catch(err=>{
             res.json({estado: mensajes.NotFoundException})
         })
    })
    .catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
    
}