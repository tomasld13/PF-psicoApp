const { Factura, Paciente, Usuario} = require("../../db")

const getFacturaByPacienteID = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id, {include: {model: Paciente, attributes: ["id"]}});
        console.log(usuario);
        const factura = await Factura.findAll({
        where: {
            pacienteId: usuario.paciente.id
        },
        include: [{model: Paciente, include: [{model: Usuario, attributes: ["name", "lastname", "email", "telephone"]}]}]
        });
        if (!factura) {
        return res.status(404).send({ error: "Factura no encontrada" });
        }
        return res.send(factura);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

module.exports = { getFacturaByPacienteID }