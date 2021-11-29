//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const vueloController = require('../../controllers/vuelo/blueprint')

//generar las rutas
router.get("/:id",vueloController.getVuelo)

router.post('/crear',vueloController.createVuelo)

router.post('/actualizar/:id',vueloController.updateVuelo)

router.post('/eliminar/:id',vueloController.deleteVuelo)

module.exports = router
