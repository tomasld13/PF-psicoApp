const { Paciente } = require("../../db")
const Router = require("express");
const { getPaciente, postPaciente, getOnePacienteAndUsers } = require("./pacienteController");

const router = Router()

router.get('/', getPaciente);
router.post('/', postPaciente);
router.get('/:id', getOnePacienteAndUsers);

module.exports = router;