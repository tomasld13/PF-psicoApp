
const Router = require("express");
const {check} = require('express-validator');
const validarJWT = require('../../middlewares/jwt-validator')

const validarCampos = require('../../middlewares/validar-campos');
const { login, renewToken } = require("./AuthController");

const router = Router();
//Email: asdasdasdasd@gmail.com y el Password.
router.post('/login',[
    check('email', 'El Email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login);
//renovartoken
router.get('/renew', validarJWT, renewToken );

module.exports = router;