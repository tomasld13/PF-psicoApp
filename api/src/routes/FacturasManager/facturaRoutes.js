const Router = require("express");
const { getFacturaByPacienteID, getFacturaByPsicologoID, getAllFacturas } = require("./facturaController");

const router = Router()

router.get('/:id', getFacturaByPacienteID);
router.get('/psicologo/:id', getFacturaByPsicologoID);
router.get('/', getAllFacturas);


module.exports = router;