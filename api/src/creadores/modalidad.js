const {Modalidad} = require("../db")

function getModalidades(){
    Modalidad.create({modalidad: "Presencial"})
    Modalidad.create({modalidad: "Virtual"})
}

module.exports = getModalidades
