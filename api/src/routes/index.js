const Router = require("express")
const psicologoRoutes = require("./psicologoRoutes")
const pacienteRoutes = require("./PacienteController/pacienteRoutes")
const router = Router();

router.use('/psicologo', psicologoRoutes);
router.use('/paciente', pacienteRoutes);

module.exports = router;