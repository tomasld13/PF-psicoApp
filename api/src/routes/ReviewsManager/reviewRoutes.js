
const Router = require("express");
const { check } = require('express-validator');
const validarCampos = require('../../middlewares/validar-campos');
const {getReviews, postReview } = require('./reviewController')
const validarJWT = require("../../middlewares/jwt-validator");
const pacienteAtendido = require('../../middlewares/fueAtendido')
const router = Router();

router.post('/:idPsicologo',[
    validarJWT,
    pacienteAtendido,
    validarCampos
],postReview)
router.get('/',getReviews)
module.exports = router;