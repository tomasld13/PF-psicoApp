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

const getCiudadesByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const ciudad = await Ciudad.findByPk(id, {include:{model: Provincia}});
        if(!ciudad) return res.status(404).send("No se encontró una ciudad con ese id")
        return res.send(ciudad)
    } catch (error) {
        next(error)
    }
}

module.exports = {getCiudades, getCiudadesByID}