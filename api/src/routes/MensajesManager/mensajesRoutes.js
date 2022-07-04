const Router = require("express");
const validarJWT = require("../../middlewares/jwt-validator");
const {obtenerChat} = require('./mensajesController');

const router = Router();

router.get('/:de', validarJWT, obtenerChat)

module.exports = router;