const { Provincia } = require("../db")
const axios = require("axios")

const getProvincias = async () => {
    const provincias = await axios.get("https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.2/download/provincias.json")
    provincias.data.provincias.map(p => async function(){
        await Provincia.create({
            id: p.id,
            name: p.nombre
        })
    }())
}

module.exports = getProvincias