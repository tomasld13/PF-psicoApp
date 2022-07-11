const {conn, Psicologo, Dia, Paciente, Rol, Genero, MetodoPago, Modalidad, Administrador, Especialidades, Provincia, Ciudad, Servicio} = require('./src/db') ;
const {socketServer, configurarSockets} = require("./src/app");
const getRoles = require("./src/creadores/roles.js")
const getGeneros = require("./src/creadores/generos.js")
const getMetodos = require("./src/creadores/metodosDePago.js")
const getModalidades = require("./src/creadores/modalidad.js");
const getEspecialidades = require('./src/creadores/especialidades');
const getProvincias = require("./src/creadores/provincias")
const getCiudades = require("./src/creadores/ciudades")
const getServicios = require("./src/creadores/servicios")
const checkDia = require("./src/creadores/checkDia")
const {generePacientes, generePsicologos, generarAdmin} = require("./src/creadores/usuarios")
require('dotenv').config();

conn.sync({force: true, logging: false}).then(async () => {
  console.log('Base de datos conectada! :D');
  socketServer.listen(process.env.PORT, async function () {
    const roles = await Rol.findAll()
    if(roles.length < 1) getRoles();
    const generos = await Genero.findAll()
    if(generos.length < 1) getGeneros();
    const metodo = await MetodoPago.findAll()
    if(metodo.length < 1) getMetodos();
    const modalidad = await Modalidad.findAll()
    if(modalidad.length < 1) getModalidades();
    const especialidad = await Especialidades.findAll()
    if(especialidad.length < 1) getEspecialidades();
    const provincias = await Provincia.findAll()
    if(provincias.length < 1) await getProvincias();
    const ciudades = await Ciudad.findAll()
    if(ciudades.length < 1) await getCiudades();
    const servicios = await Servicio.findAll()
    if(servicios.length < 1) await getServicios();
    const pacientes = await Paciente.findAll()
    if(pacientes.length < 1) generePacientes();
    const psicologos = await Psicologo.findAll()
    if(psicologos.length < 1) generePsicologos();
    const admins = await Administrador.findAll()
    if(admins.length < 1) await generarAdmin();
    await checkDia()
    console.log(`App is listening on port ${process.env.PORT}!`);
    configurarSockets();
  });  
})
.catch((err) => console.error(err));
