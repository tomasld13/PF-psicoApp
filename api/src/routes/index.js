const Router = require("express")
const psicologoRoutes = require("./PsicologoController/psicologoRoutes")
const pacienteRoutes = require("./PacienteController/pacienteRoutes")
const ciudadesRoutes = require("./Ciudades/ciudadesRoutes")
const router = Router();

router.use('/psicologo', psicologoRoutes);
router.use('/paciente', pacienteRoutes);
router.use('/ciudades', ciudadesRoutes);
module.exports = router;