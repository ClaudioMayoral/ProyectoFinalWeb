const modeloUsuario = require('../../utils/database').models.usuario_aeropuerto
const modeloBoleto = require('../../utils/database').models.boleto
const mensajes = require('../../utils/exceptions')


exports.getUsuario = (req, res)=>{
    modeloUsuario.findAll({
        where:{
            id: req.params.id
        }
    }).then(usuario=>{
        res.json(usuario[0])
    }).catch(err=>{
        res.json({estado: mensajes.NotFoundException})
    })
}


exports.createUsuario = (req, res)=>{

    modeloUsuario.create({
        nombre: req.body.nombre,
        correo: req.body.correo,
        dob: req.body.dob,
    }).then(result=>{
        res.json({
            estado: mensajes.SuccessCreate,
            id: result.id
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:mensajes.Forbiden})
    })
}


exports.updateUsuario = (req, res)=>{
    modeloUsuario.update({
        nombre: req.body.nombre,
        correo: req.body.correo,
        dob: req.body.dob,
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


exports.deleteUsuario = (req, res)=>{

    modeloBoleto.destroy({
        where:{
            id_usuario: req.params.id
        }
    }).then(() =>{
        modeloUsuario.destroy({
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