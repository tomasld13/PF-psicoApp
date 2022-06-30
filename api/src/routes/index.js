const Router = require("express");
const psicologoRoutes = require("./PsicologoManager/psicologoRoutes");
const pacienteRoutes = require("./PacienteManager/pacienteRoutes");
const ciudadesRoutes = require("./CiudadesManager/ciudadesRoutes");
const provinciasRoutes = require("./ProvinciasManager/provinciaRoutes");
const especialidadesRoutes = require("./EspecialidadesManager/especialidadesRoutes");
const AuthRoutes = require('./LoginManager/AuthRoutes');

const mercadopagoRoutes = require('./Mercadopago/mercadopagoRoutes');
const AdministradorRoutes = require('./AdminManager/AdminRoutes')
const { route } = require("./PacienteManager/pacienteRoutes");

const router = Router();


router.use('/auth', AuthRoutes)
router.use('/psicologo', psicologoRoutes);
router.use('/paciente', pacienteRoutes);
router.use('/ciudades', ciudadesRoutes);
router.use('/provincias', provinciasRoutes);
router.use('/especialidades', especialidadesRoutes);
router.use('/administrador', AdministradorRoutes)

router.use('/mercadopago', mercadopagoRoutes)
module.exports = router;