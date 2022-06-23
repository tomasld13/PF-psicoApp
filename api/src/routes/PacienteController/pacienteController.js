const { Paciente, Usuario } = require("../../db");


const getPaciente = (req, res, next) => {
  Paciente.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((error) => next(error));
};
const postPaciente = async(req, res, next) => {
  const { name, lastname, email, telephone, address, birth, rol } = req.body;
  try{
    const newUSuario =await Usuario.create({ name, lastname, email, telephone, address, birth });
    const newPaciente = await Paciente.create();
    newUSuario.setPaciente(newPaciente);
    res.send(newPaciente);
  }catch(error){
    res.status(404).send({error})
  }
}

const getOnePacienteAndUsers = async(req, res, next) => {
  const { id } = req.params;
  try{
      const paciente= await Paciente.findByPk(id, {include: [Usuario]});
      if(!paciente){
          return res.status(404).send({error: "Paciente no encontrado"});
      }
      return res.send(paciente);
  }catch(error){
      res.status(404).send({error: error.message})
  }
}
module.exports = {
  getPaciente,
  postPaciente,
  getOnePacienteAndUsers
}
