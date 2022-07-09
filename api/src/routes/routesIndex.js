const psicologoRoutes = require("./PsicologoManager/psicologoRoutes");
const pacienteRoutes = require("./PacienteManager/pacienteRoutes");
const ciudadesRoutes = require("./CiudadesManager/ciudadesRoutes");
const provinciasRoutes = require("./ProvinciasManager/provinciaRoutes");
const especialidadesRoutes = require("./EspecialidadesManager/EspecialidadesRoutes");
const AuthRoutes = require('./LoginManager/AuthRoutes');
const horariosRoutes = require("./HorariosManager/horariosRoutes")
const diaRoutes = require("./DiaManager/diaRoutes")
const administradorRoutes = require('./AdminManager/AdminRoutes')
const mercadopagoRoutes = require('./MercadoPago/mercadopagoRoutes');
const mensajesRoutes = require('./MensajesManager/mensajesRoutes')
const reviewRoutes = require('./ReviewsManager/reviewRoutes')
const uploadRoutes = require('./UploadManager/uploadRoutes')
const blogRoutes = require('./BlogManager/blogRoutes');
const facturaRoutes = require('./FacturasManager/facturaRoutes')
const newsletterRoutes = require('./NewsletterManager/NewsletterRoutes')

module.exports ={
    psicologoRoutes,
    pacienteRoutes,
    ciudadesRoutes,
    provinciasRoutes,
    especialidadesRoutes,
    AuthRoutes,
    horariosRoutes,
    diaRoutes,
    administradorRoutes,
    mercadopagoRoutes,
    mensajesRoutes,
    reviewRoutes,
    uploadRoutes,
    blogRoutes,
    facturaRoutes,
    newsletterRoutes
}