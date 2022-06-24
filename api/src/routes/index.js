const Router = require("express")
const psicologoRoutes = require("./PsicologoController/psicologoRoutes")
const pacienteRoutes = require("./PacienteController/pacienteRoutes")
const ciudadesRoutes = require("./CiudadesController/ciudadesRoutes")
const provinciasRoutes = require("./ProvinciasController/provinciaRoutes")
const router = Router();

router.use('/psicologo', psicologoRoutes);
router.use('/paciente', pacienteRoutes);
router.use('/ciudades', ciudadesRoutes);
router.use('/provincias', provinciasRoutes)
module.exports = router;