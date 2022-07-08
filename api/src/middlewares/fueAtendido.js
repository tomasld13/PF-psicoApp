const { response } = require("express");
const {Psicologo, Paciente, Usuario} = require('../db')


const pacienteAtendido =async (req,res = response, next)=>{
   
    const {idPsicologo} = req.params;
    const { name} = req.user;
    const psico = await Psicologo.findByPk(idPsicologo);
    const idUser = req.user.id;
    const paciente = await Usuario.findByPk(idUser, {
        include : {
            model : Paciente
        }
    });
    if(!psico.pacientesAtendidos.includes(paciente.paciente.id)){
        return res.status(401).json({
            msg : `${name} no está autorizado para dar un review. Primero debe atenderse por el profesional`
        })
    }
    next();
}
module.exports = pacienteAtendido;