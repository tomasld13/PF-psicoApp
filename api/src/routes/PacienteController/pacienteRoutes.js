
const Router = require("express");
const { getPaciente, postPaciente } = require("./pacienteController");

const router = Router()

router.get('/', getPaciente);
router.post('/', postPaciente);

module.exports = router;