const { Paciente } = require("../../db");

const getPaciente = (req, res, next) => {
    Paciente.findAll()
     .then((users) => {
      res.send(users);
     })
     .catch((error) => next(error));
   };
const postPaciente = (req, res, next) => {
    const user = req.body;
    Paciente.create(user)
     .then((createdUser) => {
      res.send(createdUser);
     })
     .catch((error) => next(error));
   }
module.exports = {
    getPaciente,
    postPaciente
}
