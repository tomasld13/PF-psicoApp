const {Factura} = require("../../db")

const getGanancias = async (req, res, next) => {
    let { fecha } = req.params
    try {
        fecha = fecha.slice(0,7)
        console.log(fecha)
        let facturas = await Factura.findAll()
        let ganancia = 0
        facturas = facturas.map((f) => {if(f.fecha.slice(0,7) == fecha) ganancia += f.precio})
        return res.send({ganancia})
    } catch (error) {
        next(error)
    }
}

module.exports = getGanancias