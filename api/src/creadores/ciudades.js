const { Ciudad, Provincia } = require("../db")
const axios = require("axios")

const getCiudades = async () => {
    const ciudades = await axios.get("https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.4/download/municipios.json")
    await ciudades.data.municipios.map(m => async function(){
        const ciudadActual = await Ciudad.create({name: m.nombre})
        const provincia = await Provincia.findByPk(m.provincia.id)
        await ciudadActual.setProvincium(provincia)
    }())
    console.log("Ciudades cargadas correctamente.")
}

module.exports = getCiudades