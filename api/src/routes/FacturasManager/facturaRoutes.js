const Router = require("express");
const { getFacturaByPacienteID } = require("./facturaController");

const router = Router()

router.get('/:id', getFacturaByPacienteID);

module.exports = router;