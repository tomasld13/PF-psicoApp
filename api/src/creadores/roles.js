const {Rol} = require("../db")

function getRoles(){
    Rol.create({name :"Paciente"})
    Rol.create({name :"Psicologo"})
    Rol.create({name :"Administrador"})
}

module.exports = getRoles;
