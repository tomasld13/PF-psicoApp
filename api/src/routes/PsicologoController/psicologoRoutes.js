const Router = require("express");
const { getPsicologo, postPsicologo, getOnePsicologoAndUsers, getPsicologosByProvincia, getPsicologosByCiudad, getPsicologosByEspecialidad } = require("./psicologoController");

const router = Router()

router.get('/', getPsicologo);
router.post('/', postPsicologo);
router.get('/:id', getOnePsicologoAndUsers);
router.get('/provincia/:provincia', getPsicologosByProvincia)
router.get('/ciudad/:ciudad', getPsicologosByCiudad)
router.get('/especialidad/:especialidad', getPsicologosByEspecialidad)

module.exports = router;