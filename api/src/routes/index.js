const Router = require("express")
const psicologoRoutes = require("./psicologoRoutes")
const pacienteRoutes = require("./pacienteRoutes")
const router = Router();

router.use('/psicologo', psicologoRoutes);
router.use('/paciente', pacienteRoutes);

module.exports = router;