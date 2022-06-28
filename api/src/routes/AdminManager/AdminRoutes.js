
const Router = require("express");
const {check} = require('express-validator');
const { esAdminRol } = require("../../middlewares/validarAdmin");
const { verficarEmail , verificarId} = require("../../helpers/db-validators");
const validarJWT = require("../../middlewares/jwt-validator");
const validarCampos = require("../../middlewares/validar-campos");
const { getAdmin } = require("./AdminController");


const router = Router()
//Tar los pacientes
router.get('/',getAdmin);
//Postea un paciente

module.exports = router;