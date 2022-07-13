const { Provincia, Ciudad} = require("../../db")

const getProvincias = async (req, res, next) => {
    try {
        const provincias = await Provincia.findAll({include:{model: Ciudad}})
        if(!provincias) return res.send("No se encontraron provincias.")
        res.send(provincias)
    } catch (error) {
        next(error)
    }
}

const getProvinciasByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        let provincia = await Provincia.findByPk(id, {include:{model: Ciudad}});
        if(!provincia) return res.status(404).send("No se encontró una provincia con ese id")
        provincia = provincia.ciudads.sort((a,b) => {
            if(a.name > b.name) return 1
            else if(a.name < b.name) return -1
            return 0
        })
        return res.send(provincia)
    } catch (error) {
        next(error)
    }
}

module.exports = {getProvincias, getProvinciasByID}