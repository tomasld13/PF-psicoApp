const Router = require("express");
const validarJWT = require("../../middlewares/jwt-validator");
const { postTestimonio, getTestimonios } = require("./testimonioController");
const {esAdminRol} = require('../../middlewares/validarAdmin');

const router = Router();

router.post('/', validarJWT,postTestimonio );
router.get('/',[validarJWT, esAdminRol], getTestimonios)

module.exports = router;