const {Genero} = require("../db")

function getGeneros(){
    Genero.create({genero: "Masculino"})
    Genero.create({genero: "Femenino"})
    Genero.create({genero: "No Binario"})
}

module.exports = getGeneros;