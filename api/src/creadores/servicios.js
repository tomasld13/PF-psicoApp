const {Servicio} = require("../db")

function getServicios(){
    Servicio.create({servicio: "Sesion personal"})
    Servicio.create({servicio: "Sesion de pareja"})
    Servicio.create({servicio: "Sesion de grupo"})
    Servicio.create({servicio: "Sesion de grupo"})
    Servicio.create({servicio: "Sesion de trabajo"})
}


module.exports = getServicios;