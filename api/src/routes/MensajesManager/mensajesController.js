const {Mensaje} = require('../../db');
const { Op } = require("sequelize");
const obtenerChat = async (req, res) => {

    const miId = req.user.id;//Esto viene del validador de JWT, que trae la información de quien hace la peticion. "Pablo";
    const mensajesDe = req.params.de;//Este es el usuario que envio los mensajes. Mensaje de: "augusto"

   
    const last30 = await Mensaje.findAll({
        where: {
             [Op.or] : [
                {[Op.and] : [{de: miId}, {para : mensajesDe}]},
                {[Op.and] : [{de: mensajesDe}, {para : miId}]}
             ]
        },
        limit : 20,
        order : [['createdAt', 'ASC']]
    })




    res.json({
        ok: true,
        mensajes: last30
    });


}

module.exports = {
    obtenerChat
}