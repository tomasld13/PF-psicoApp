const Router = require("express");
const {check} = require('express-validator');
const { verficarEmail , verificarId} = require("../../helpers/db-validators");
const { getPsicologo, postPsicologo, getOnePsicologoAndUsers, getPsicologosByProvincia, getPsicologosByCiudad, getPsicologosByEspecialidad,postServicioPsicologo,getPsicologosByGenero, updatePsicologo } = require("./psicologoController");
const validarJWT = require("../../middlewares/jwt-validator");
const validarCampos = require("../../middlewares/validar-campos");

const router = Router()

router.get('/', getPsicologo);
router.post('/',
[check('email','No es un email valido').isEmail(),
check('email').custom(verficarEmail),
check('name','Nombre requerido').not().isEmpty(),
check('password','La contraseña debe ser minimo de 6 characteres').isLength({min : 6})],
postPsicologo);
router.get('/:id',[
    validarCampos,
    check('id').custom(verificarId),

], getOnePsicologoAndUsers);
router.get('/provincia/:provincia', getPsicologosByProvincia)
router.get('/ciudad/:ciudad', getPsicologosByCiudad)
router.get('/especialidad/:especialidad', getPsicologosByEspecialidad)
router.post('/servicio/:id', postServicioPsicologo)
router.put("/:id", updatePsicologo)
router.get('/genero/:genero', getPsicologosByGenero)
module.exports = router;