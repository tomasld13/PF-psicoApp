const {Mensaje} = require('../../db');
const { Op } = require("sequelize");
const obtenerChat = async (req, res) => {

    const miId = req.user.id;
    const mensajesDe = req.params.de;

    /* const last30 = await Mensaje.findAll({
        $or: [
            { de: miId, para: mensajesDe },
            { de: mensajesDe, para: miId },
        ]
    }) */
    const last30 = await Mensaje.findAll({
        where: {
            [Op.or]: {
                [Op.and]: [{ de: miId }, { para: mensajesDe }],
                [Op.and]: [{ de: mensajesDe }, { para: miId }]
            }
        },
        limit : 30,
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