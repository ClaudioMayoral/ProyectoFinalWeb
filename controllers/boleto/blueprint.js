const modeloVuelo = require('../../utils/database').models.vuelo
const modeloBoleto = require('../../utils/database').models.boleto
const mensajes = require('../../utils/exceptions')


exports.getBoleto = (req, res)=>{
    modeloBoleto.findAll({
        where:{
            id_usuario: req.params.id_usuario,
            id_vuelo: req.params.id_vuelo,
        }
    }).then(boleto=>{
        res.json(boleto[0])
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}

exports.getBoletoUsuario = (req, res)=>{
    modeloBoleto.findAll({
        where:{
            id_usuario: req.params.id,
        }
    }).then(boleto=>{
        console.log(boleto)
        res.json(boleto)
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}

exports.getBoletoVuelo = (req, res)=>{
    modeloBoleto.findAll({
        where:{
            id_vuelo: req.params.id,
        }
    }).then(boleto=>{
        res.json(boleto)
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.createBoleto = (req, res)=>{

    modeloBoleto.create({
        id_vuelo: req.body.idVuelo,
        id_usuario: req.body.idUsuario,
    }).then(result=>{
        updateVuelo(req.body.idVuelo)
        res.json({estado:mensajes.SuccessCreate})
    })
    .catch((err)=>{
        res.json({estado: mensajes.Forbiden})
    })
}


function updateVuelo(id){

    modeloVuelo.findAll({
        where:{
            id: id
        }
    }).then(vuelo=>{
        modeloVuelo.update({
            lugares: vuelo[0].lugares - 1,
        },{
            where:{
                id: id
            }
        })
        .then(()=>{
            res.json({estado:mensajes.SuccessUpdate})
        })
        .catch((err)=>{
            res.json({estado: mensajes.NotFoundException})
        })
        res.json(vuelo[0])
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })

    
}


exports.deleteBoleto = (req, res)=>{

    modeloBoleto.destroy({
        where:{
            id_vuelo: req.params.id_vuelo,
            id_usuario: req.params.id_usuario
        }
    }).then(() =>{
        res.json({estado: mensajes.SuccessDelete})
    })
    .catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
    
}