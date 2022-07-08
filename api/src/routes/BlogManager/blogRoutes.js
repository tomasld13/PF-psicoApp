const Router = require("express");
const validarJWT = require("../../middlewares/jwt-validator");
const validarCampos = require("../../middlewares/validar-campos");
const { esAdminRol } = require("../../middlewares/validarAdmin");
const { agregarBlog, getBlog } = require("./blogController");

const router = Router();

router.post('/',[ 
    validarJWT,
    esAdminRol,
    validarCampos],agregarBlog);
router.get('/',[
    validarJWT,
    esAdminRol,
    validarCampos
],getBlog)




module.exports = router;