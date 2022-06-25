const {MetodoPago} = require("../db")

function getMetodos(){
    MetodoPago.create({metodoPago: "Mercado Pago"})
}

module.exports = getMetodos;
