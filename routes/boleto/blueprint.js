//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const boletoController = require('../../controllers/boleto/blueprint')

//generar las rutas
router.get("/ambos/:id_vuelo/:id_usuario", boletoController.getBoleto)

router.get("/usuario/:id", boletoController.getBoletoUsuario)

router.get("/vuelo/:id", boletoController.getBoletoVuelo)

router.post('/crear',boletoController.createBoleto)

router.post('/eliminar/:id_vuelo/:id_usuario',boletoController.deleteBoleto)

module.exports = router