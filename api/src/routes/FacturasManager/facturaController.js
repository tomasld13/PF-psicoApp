const { Factura, Paciente, Usuario, Psicologo} = require("../../db")

const getFacturaByPacienteID = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id, {include: {model: Paciente, attributes: ["id"]}});
        console.log(usuario);
        const factura = await Factura.findAll({
        where: {
            pacienteId: usuario.paciente.id
        },
        include: [{model: Paciente, include: [{model: Usuario, attributes: ["name", "lastname", "email", "telephone"]}]}, {model: Psicologo, include: [{model: Usuario, attributes: ["name", "lastname", "email", "telephone"]}]}]
        });
        if (!factura) {
        return res.status(404).send({ error: "Factura no encontrada" });
        }
        return res.send(factura);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const getFacturaByPsicologoID = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id, {include: {model: Psicologo, attributes: ["id"]}});
        const factura = await Factura.findAll({
        where: {
            psicologoId: usuario.psicologo.id
        },
        include: [{model: Psicologo, include: [{model: Usuario, attributes: ["name", "lastname", "email", "telephone"]}]}, {model: Paciente, include: [{model: Usuario, attributes: ["name", "lastname", "email", "telephone"]}]}]
        });
        if (!factura) {
        return res.status(404).send({ error: "Factura no encontrada" });
        }
        return res.send(factura);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const getAllFacturas = async (req, res) => {
    try {
        const factura = await Factura.findAll({ attributes: ["precio", "fecha"]});
        if (!factura) {
        return res.status(404).send({ error: "Factura no encontrada" });
        }
        const facturaLength = factura.length
        const sumaFacturas = factura.reduce((acc, curr) => acc + curr.precio, 0);
        return res.send([{sumaFacturas}, factura, facturaLength]);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

module.exports = { getFacturaByPacienteID, getFacturaByPsicologoID, getAllFacturas }