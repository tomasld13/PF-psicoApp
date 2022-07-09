const Router = require("express");

const {
    AuthRoutes,
    psicologoRoutes,
    pacienteRoutes,
    ciudadesRoutes,
    provinciasRoutes,
    especialidadesRoutes,
    diaRoutes,
    horariosRoutes,
    administradorRoutes,
    mercadopagoRoutes,
    mensajesRoutes,
    uploadRoutes,
    facturaRoutes,
    blogRoutes,
    reviewRoutes,
<<<<<<< HEAD
    newsletterRoutes
=======
    usuarioRoutes
>>>>>>> backend
} = require('./routesIndex');

const router = Router();


router.use('/auth', AuthRoutes)
router.use('/psicologo', psicologoRoutes);
router.use('/paciente', pacienteRoutes);
router.use('/ciudades', ciudadesRoutes);
router.use('/provincias', provinciasRoutes)
router.use('/especialidades', especialidadesRoutes)
router.use("/dia", diaRoutes)
router.use("/horarios", horariosRoutes)
router.use('/administrador', administradorRoutes)
router.use("/usuario", usuarioRoutes)
router.use('/mercadopago', mercadopagoRoutes)
router.use('/mensajes', mensajesRoutes)

router.use('/update', uploadRoutes)

router.use('/Factura', facturaRoutes)
router.use('/blog', blogRoutes)
router.use('/reviews',reviewRoutes)
router.use('/newsletter', newsletterRoutes)

module.exports = router;