const Router = require("express");
const psicologoRoutes = require("./PsicologoManager/psicologoRoutes");
const pacienteRoutes = require("./PacienteManager/pacienteRoutes");
const ciudadesRoutes = require("./CiudadesManager/ciudadesRoutes");
const provinciasRoutes = require("./ProvinciasManager/provinciaRoutes");
const especialidadesRoutes = require("./EspecialidadesManager/EspecialidadesRoutes");
const AuthRoutes = require('./LoginManager/AuthRoutes');
const horariosRoutes = require("./HorariosManager/horariosRoutes")
const diaRoutes = require("./DiaManager/diaRoutes")
const AdministradorRoutes = require('./AdminManager/AdminRoutes')
const mercadopagoRoutes = require('./MercadoPago/mercadopagoRoutes');
const mensajesRoutes = require('./MensajesManager/mensajesRoutes')
const facturaRoutes = require('./FacturasManager/facturaRoutes')

const router = Router();


router.use('/auth', AuthRoutes)
router.use('/psicologo', psicologoRoutes);
router.use('/paciente', pacienteRoutes);
router.use('/ciudades', ciudadesRoutes);
router.use('/provincias', provinciasRoutes)
router.use('/especialidades', especialidadesRoutes)
router.use("/dia", diaRoutes)
router.use("/horarios", horariosRoutes)
router.use('/administrador', AdministradorRoutes)

router.use('/mercadopago', mercadopagoRoutes)
router.use('/mensajes', mensajesRoutes)
router.use('/Factura', facturaRoutes)
module.exports = router;