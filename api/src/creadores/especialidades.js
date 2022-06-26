const {Especialidades} = require("../db")

function getEspecialidades(){
    Especialidades.create({especialidad: "Psicologia Clinica"})
    Especialidades.create({especialidad: "Psicologia Educacional"})
    Especialidades.create({especialidad: "Psicologia Deportiva"})
    Especialidades.create({especialidad: "Psicologia Forense"})
    Especialidades.create({especialidad: "Psicologia Organizacional"})
}

module.exports = getEspecialidades;