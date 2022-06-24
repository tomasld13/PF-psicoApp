const { Paciente, Usuario, Rol, Genero, Ciudad, Provincia } = require("../../db");


const getPaciente = (req, res, next) => {
  Usuario.findAll({where : {rolId : 1}, include: [{ model: Paciente, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
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
  const { name, lastname, email, telephone, address, birth, rol, gener, ciudad } = req.body;
  try {
    const newUSuario = await Usuario.create({ name, lastname, email, telephone, address, birth });
    const newPaciente = await Paciente.create();
    const role = await Rol.findOne({where:{name:rol}});
    const genero = await Genero.findOne({where:{genero:gener}});
    const city = await Ciudad.findOne({where:{name:ciudad}});
    
    newUSuario.setPaciente(newPaciente);
    newUSuario.setRol(role);
    newUSuario.setGenero(genero);
    newUSuario.setCiudad(city);
   
    res.send([newUSuario, newPaciente]);
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
}

const getOnePacienteAndUsers = async (req, res, next) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id, { include: [Paciente] });
    if (!usuario) {
      return res.status(404).send({ error: "Paciente no encontrado" });
    }
    return res.send(usuario);
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
}
module.exports = {
  getPaciente,
  postPaciente,
  getOnePacienteAndUsers
}

