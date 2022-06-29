const {conn, Psicologo, Horarios, Dia, Usuario, Paciente, Factura, MetodoPago, Detalle, Modalidad, Genero, Rol, Especialidades, Ciudad, Provincia} = require('./src/db') ;
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
    //await getProvincias();
    //await getCiudades();
    generePacientes()
    generePsicologos()

    const usuario1 = await Usuario.create({
      name: "Natalia",
      lastname: "Jorgelin",
      email: "ejemplo1@gmail.com",
      telephone: "1122334455",
      address: "Calle Falsa 321",
      birth: "02/10/1949",
      password: 12345
    })

    const rolPaciente = await Rol.findOne({where:{id:1}})
    const generoM = await Genero.findOne({where:{id:1}})
    const paciente = await Paciente.create()
    usuario1.setGenero(generoM)
    usuario1.setRol(rolPaciente)
    //console.log(usuario)
    await usuario1.setPaciente(paciente)
    //console.log("Paciente:")
    //console.log(paciente)

    const usuario2 = await Usuario.create({
      name: "Natalia",
      lastname: "Natalia",
      email: "ejemplo@gmail.com",
      telephone: "1122334455",
      address: "Calle Falsa 321",
      birth: "02/10/1949",
      password: 12345
    })

    //Psicologo
    const rolPsico = await Rol.findOne({where:{id:2}})
    const generoF = await Genero.findOne({where:{id:2}})
    usuario2.setGenero(generoF)
    usuario2.setRol(rolPsico)
    const psicologo = await Psicologo.create({yearsExperience:10, honorario:20})
    const especialidad = await Especialidades.findOne({where:{id:1}})
    psicologo.setEspecialidades(especialidad)
    await usuario2.setPsicologo(psicologo)
    
    const dia1 = await Dia.create({fecha: "2022-06-29"})
    const horario = await Horarios.create({hora: "22:15:00"})
    horario.setPaciente(paciente)
    horario.setPsicologo(psicologo)
    paciente.setHorarios(horario)
    dia1.setHorarios(horario)
    psicologo.setDia(dia1)

    const dia2 = await Dia.create({fecha: "2022-06-30"})
    const horario2 = await Horarios.create({hora: "21:00:00"})
    const horario3 = await Horarios.create({hora: "23:30:00"})

    horario2.setPaciente(paciente)
    horario3.setPaciente(paciente)
    horario2.setPsicologo(psicologo)
    horario3.setPsicologo(psicologo)
    paciente.addHorarios(horario2)
    await dia2.setHorarios(horario2)
    await dia2.addHorarios(horario3)
    psicologo.addDia(dia2)

    console.log(`App is listening on port ${process.env.PORT}!`);
  });
})
.catch((err) => console.error(err));