const {conn} = require('./src/db') ;
const server = require("./src/app");
const getRoles = require("./src/creadores/roles.js")
const getGeneros = require("./src/creadores/generos.js")
const getMetodos = require("./src/creadores/metodosDePago.js")
const getModalidades = require("./src/creadores/modalidad.js");
const getEspecialidades = require('./src/creadores/especialidades');
const getProvincias = require("./src/creadores/provincias")
const getCiudades = require("./src/creadores/ciudades")
const {generePacientes, generePsicologos} = require("./src/creadores/usuarios")
require('dotenv').config();

conn.sync({force: true, logging: false}).then(async () => {
  console.log('Base de datos conectada! :D');
  server.listen(process.env.PORT, async function () {
    getRoles();
    getGeneros();
    getMetodos();
    getModalidades();
    getEspecialidades();
    await getProvincias();
    await getCiudades();
    generePacientes()
    generePsicologos()
    console.log(`App is listening on port ${process.env.PORT}!`);
  });
})
.catch((err) => console.error(err));