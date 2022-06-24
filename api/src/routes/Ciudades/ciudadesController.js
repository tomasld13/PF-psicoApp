const { Ciudad, Provincia} = require("../../db")

const getCiudades = async (req, res, next) => {
    try {
        const ciudades = await Ciudad.findAll({include:[{model:Provincia}]});
        if(!ciudades) return res.status(404).send("No se pudieron encontrar las ciudades.")
        return res.send(ciudades)
    } catch (error) {
        return next(error)
    }
}

module.exports = getCiudades;