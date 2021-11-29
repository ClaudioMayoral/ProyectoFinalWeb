//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const boletoController = require('../../controllers/boleto/blueprint')

//generar las rutas
router.get("/:id", boletoController.getBoleto)

router.post('/crear',boletoController.createBoleto)

router.post('/actualizar/:id',boletoController.updateBoleto)

router.post('/eliminar/:id',boletoController.deleteBoleto)

module.exports = router