const {Genero} = require("../db")

function getGeneros(){
    Genero.create({genero: "Masculino"})
    Genero.create({genero: "Femenino"})
    Genero.create({genero: "No Binario"})
    Genero.create({genero: "Otro"})
}

module.exports = getGeneros;