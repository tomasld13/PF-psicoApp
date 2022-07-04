const { Paciente, Usuario, Rol, Genero, Ciudad, Provincia, Factura } = require("../../db");
const bcrypt = require('bcryptjs');
/* const SibApiV3Sdk = require('sib-api-v3-sdk'); */
require('dotenv').config();
/* SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.API_KEY_SENDINBLUE; */
const nodemailer = require('nodemailer');


//Creamos el tranportador
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD_ENV
  },
  port : 465,
  host : 'smpt.gmail.com'
});



const getPacientes = (req, res, next) => {
  Usuario.findAll({
    where: { rolId: 1, state: true }, include: [{ model: Paciente, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
    { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
    { model: Genero, attributes: ["genero"] },
    { model: Rol, attributes: ["name"] }]
  })
    .then((patients) => {
      res.send(patients);
    })
    .catch((error) => next(error));
};
const postPaciente = async (req, res, next) => {
  const { name, lastname, email, telephone, address, birth, rol, gener, ciudad, password } = req.body;

  try {
    //Creacion de usuario
    const newUSuario = await Usuario.create({ name, lastname, email, telephone, address, birth, password: bcrypt.hashSync(password, 10) });
    const newPaciente = await Paciente.create();
    const role = await Rol.findOne({ where: { name: rol } });
    const genero = await Genero.findOne({ where: { genero: gener } });
    const city = await Ciudad.findOne({ where: { name: ciudad } });

    newUSuario.setPaciente(newPaciente);
    newUSuario.setRol(role);
    newUSuario.setGenero(genero);
    newUSuario.setCiudad(city);
    
    //enviamos el mail de confirmacion.
    let info = await transporter.sendMail({
      from: `${process.env.EMAIL}`, // sender address
      to: `${email}`, // list of receivers
      subject: "Welcome to Psico Health ✔", // Subject line
      text: "Welcome to PsicoHealth. Here you'll find a way to realease your soul.", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log(info.messageId);


    res.send([newUSuario, newPaciente]);
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
}

const getOnePacienteAndUsers = async (req, res, next) => {
  const { id } = req.params;
  try {
    const paciente = await Usuario.findByPk(id, {
      include: [{ model: Paciente, include: { model: Factura, attributes: ["id", "status", "payment_id", "payment_status", "metodoPagoId"] }, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
      { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
      { model: Genero, attributes: ["genero"] },
      { model: Rol, attributes: ["name"] }]
    });
    if (!paciente) {
      return res.status(404).send({ error: "Paciente no encontrado" });
    }
    return res.send(paciente);
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
};
const deletePaciente = async (req, res) => {
  const { id } = req.params;
  try {
    await Usuario.update({ state: false }, {
      where: {
        id: id
      }
    });

    const user = await Usuario.findOne({
      where: { id: id }, include: [{ model: Paciente, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
      { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
      { model: Genero, attributes: ["genero"] },
      { model: Rol, attributes: ["name"] }]
    });

    res.status(200).json({
      ok: true,
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
}
module.exports = {
  getPacientes,
  postPaciente,
  getOnePacienteAndUsers,
  deletePaciente
}

