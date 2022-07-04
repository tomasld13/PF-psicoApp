const Router = require("express");
const { getEspecialidades, getEspecialidadByID } = require("./EspecialidadesController");

const router = Router()

router.get('/', getEspecialidades);
router.get('/:id', getEspecialidadByID);

module.exports = router;