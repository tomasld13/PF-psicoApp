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
        res.status(200).send(newPiscologo);
    }catch(error){
        res.status(404).send({error: error.message})
    }
}

const getOnePsicologoAndUsers = async(req, res, next) => {
    const { id } = req.params;
    try{
        
        const psicologo = await Psicologo.findByPk(id, {include: [Usuario]});
        if(!psicologo){
            return res.status(404).send({error: "Psicologo no encontrado"});
        }
        return res.send(psicologo);
    }catch(error){
        res.status(404).send({error: error.message})
    }
}

module.exports = {
    getPsicologo,
    postPsicologo,
    getOnePsicologoAndUsers
  }