const Router = require("express");
const { getHorariosPsicologo, getHorariosPaciente, postHorarioPsicologo, deleteHorario, updateHorario } = require("./horariosController");

const router = Router()

router.get('/psicologo/:id', getHorariosPsicologo);
router.get('/paciente/:id', getHorariosPaciente);
router.post("/psicologo/:id", postHorarioPsicologo)
router.put("/:id", updateHorario)
router.delete("/:id", deleteHorario)
module.exports = router;