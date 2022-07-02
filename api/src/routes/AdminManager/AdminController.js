const { Paciente, Usuario, Rol, Genero, Ciudad, Provincia, Administrador } = require("../../db");
const bcrypt = require('bcryptjs');


const getAdmin = (req, res, next) => {
  Usuario.findAll({
    where: { rolId: 3 }, include: [{ model: Administrador, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
    { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
    { model: Genero, attributes: ["genero"] },
    { model: Rol, attributes: ["name"] }]
  })
    .then((admin) => {
      res.send(admin);
    })
    .catch((error) => next(error));
};
module.exports = {
    getAdmin
}