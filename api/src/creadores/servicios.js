const {Servicio} = require("../db")

async function getServicios(){
    await Servicio.create({servicio: "Sesion personal"})
    await Servicio.create({servicio: "Sesion de pareja"})
    await Servicio.create({servicio: "Sesion de grupo"})
    await Servicio.create({servicio: "Sesion infantil"})
    await Servicio.create({servicio: "Sesion de trabajo"})
}


module.exports = getServicios;