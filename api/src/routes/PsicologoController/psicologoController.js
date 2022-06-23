const { Psicologo, Usuario } = require("../../db");

const getPsicologo = async (req, res, next) => {
    try {
        const psicologos = await Psicologo.findAll();
        res.send(psicologos);
    } catch (error) {
        res.status(404).send({error: error.message});
    }
}

const postPsicologo = async(req, res, next) => {
    const { name, lastname, email, telephone, address, birth, rol, honorario, yearsExperience} = req.body;
    try{
        const newUSuario =await Usuario.create({ name, lastname, email, telephone, address, birth });
        const newPiscologo = await Psicologo.create({honorario, yearsExperience});
        newUSuario.setPsicologo(newPiscologo);
        res.status(200).send(newUSuario);
    }catch(error){
        res.status(404).send({error: error.message})
    }
}

module.exports = {
    getPsicologo,
    postPsicologo
  }