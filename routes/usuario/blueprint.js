//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const usuarioController = require('../../controllers/usuario/blueprint')

//generar las rutas
router.get("/:id",usuarioController.getUsuario)

router.post('/crear',usuarioController.createUsuario)

router.post('/actualizar/:id',usuarioController.updateUsuario)

router.post('/eliminar/:id',usuarioController.deleteUsuario)

module.exports = router
