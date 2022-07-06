const Router = require("express");
const { getFacturaByPacienteID } = require("./FacturaController");

const router = Router()

router.get('/:id', getFacturaByPacienteID);

module.exports = router;