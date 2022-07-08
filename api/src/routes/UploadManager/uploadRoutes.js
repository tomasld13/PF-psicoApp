
const Router = require("express");
const { check } = require('express-validator');
const validarCampos = require('../../middlewares/validar-campos');
const {  actualizarImagenCloudinary } = require("./uploadController");
const {validarArchivo} = require('../../middlewares/validar-archivo');
const router = Router();


router.put('/user/:id',[validarArchivo,
    check('id','El id debe ser un id valido').custom(id=>{
        
        if(isNaN(id)){
            throw new Error('El id no es valido - Not A Number');
        }
        return true;
    }),
    validarCampos
], actualizarImagenCloudinary)
module.exports = router;