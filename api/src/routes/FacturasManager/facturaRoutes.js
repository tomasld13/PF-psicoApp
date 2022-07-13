const Router = require("express");
const { getFacturaByPacienteID, getFacturaByPsicologoID } = require("./facturaController");

const router = Router()

router.get('/:id', getFacturaByPacienteID);
router.get('/psicologo/:id', getFacturaByPsicologoID);

module.exports = router;