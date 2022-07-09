const { Favoritos, Paciente, Psicologo, Usuario} = require("../../db")

const postFavoritoByPacienteID = async (req, res) => {
    const { id } = req.params; // este el id del psicologo
    const { pacienteID } = req.body; // este el id del paciente
    try {
        const psicologo = await Psicologo.findByPk(id, {include : {model : Usuario, attributes : ["name", "lastname"]}});
        const favorito = await Favoritos.create({
            psicofavorito: psicologo.usuario.name + " " + psicologo.usuario.lastname
        });
        const paciente = await Paciente.findByPk(pacienteID, {include: {model: Favoritos, attributes: ["psicofavorito"]}});
        const exist = paciente.favoritos.find(el => el.psicofavorito === psicologo.usuario.name + " " + psicologo.usuario.lastname);
        if (!exist) {
            await paciente.addFavorito(favorito);
        }else{
            return res.status(400).json({
                message: "El psicologo ya esta en tus favoritos"
            })
        }
        return res.send(paciente);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const deleteFavoritoByPacienteID = async (req, res) => {
    const { id } = req.params; // este el id del psicologo
    const { pacienteID } = req.body; // este el id del paciente
    try {
        const psicologo = await Psicologo.findByPk(id, {include : {model : Usuario, attributes : ["name", "lastname"]}});
        const favorito = await Favoritos.findOne({
            where: {
                psicofavorito: psicologo.usuario.name + " " + psicologo.usuario.lastname
            }
        });
        const paciente = await Paciente.findByPk(pacienteID, {include: {model: Favoritos, attributes: ["psicofavorito"]}});
        const exist = paciente.favoritos.find(el => el.psicofavorito === psicologo.usuario.name + " " + psicologo.usuario.lastname);
        if (exist) {
            await paciente.removeFavorito(favorito);
        }else{
            return res.status(400).json({
                message: "El psicologo no esta en tus favoritos"
            })
        }
        return res.send(paciente);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const getFavoritosByPacienteID = async (req, res) => {
    //este es el id del paciente
    const { id } = req.params;
    try {
        const paciente = await Paciente.findByPk(id, {include: {model: Favoritos, attributes: ["psicofavorito"]}});
        return res.send(paciente);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}
module.exports = { postFavoritoByPacienteID, deleteFavoritoByPacienteID, getFavoritosByPacienteID };