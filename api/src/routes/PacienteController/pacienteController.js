const { Paciente, Usuario } = require("../../db");


const getPaciente = (req, res, next) => {
  Paciente.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((error) => next(error));
};
const postPaciente = async(req, res, next) => {
  /*   
    name
    lastname
    email
    telephone
    direccion
    birth */
  const { name, lastname, email, telephone, address, birth, rol } = req.body;
  try{
    const newUSuario =await Usuario.create({ name, lastname, email, telephone, address, birth });
    const newPaciente = await Paciente.create();
    newPaciente.addUsuario(newUSuario.id);
    console.log(newUSuario);
    res.send(newPaciente);
  }catch(error){
    res.status(404).send({error})
  }

 /*  Usuario.create({ name, lastname, email, telephone, address, birth })
    .then(createdUser =>Paciente.create(createdUser.id))
    .then(createdPatience=>res.send(createdPatience))
    .catch(error=>res.send(error)); */
  /* Paciente.create(user)
    .then((createdUser) => {
      res.send(createdUser);
    })
    .catch((error) => next(error)); */
}
module.exports = {
  getPaciente,
  postPaciente
}
