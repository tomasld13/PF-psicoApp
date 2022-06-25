const { Especialidades} = require("../../db")

const getEspecialidades = async (req, res, next) => {
    try {
        const especialidad = await Especialidades.findAll();
        if(!especialidad) return res.status(404).send("No se encontraron las especialidades")
        return res.send(especialidad)
    } catch (error) {
        return next(error)
    }
}

const getEspecialidadByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const especialidad = await Especialidades.findByPk(id);
        if(!especialidad) return res.status(404).send("No se encontro la especialidad por el id")
        return res.send(especialidad)
    } catch (error) {
        next(error)
    }
}


module.exports = {getEspecialidades, getEspecialidadByID}