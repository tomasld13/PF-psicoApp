const { Psicologo, Usuario, Paciente, Ciudad, Provincia, Genero, Rol, Especialidades } = require("../../db");

const getPsicologo = async (req, res, next) => {
    Usuario.findAll({
        where: { rolId: 2},
        include: [{ model: Psicologo, include: { model: Especialidades, attributes: ['especialidad'] }, attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
        { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
        { model: Genero, attributes: ["genero"] },
        { model: Rol, attributes: ["name"] }]
    })
        .then((psicologos) => {
            res.send(psicologos);
        })
        .catch((error) => res.send({ error: error.message }));
}

const postPsicologo = async (req, res, next) => {
    const { name, lastname, email, telephone, address, birth, rol, gener, ciudad, honorario, yearsExperience , especialidad} = req.body;
    try {
        const newUSuario = await Usuario.create({ name, lastname, email, telephone, address, birth });
        const newPsicologo = await Psicologo.create({ honorario, yearsExperience });
        const role = await Rol.findOne({ where: { name: rol } });
        const genero = await Genero.findOne({ where: { genero: gener } });
        const city = await Ciudad.findOne({ where: { name: ciudad } });
        const espe = await Especialidades.findOne({where : {'especialidad' : especialidad}});


        newUSuario.setPsicologo(newPsicologo);
        newUSuario.setRol(role);
        newUSuario.setGenero(genero);
        newUSuario.setCiudad(city);
        newPsicologo.setEspecialidade(espe);
        
        res.status(200).send([newUSuario,newPsicologo]);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }

}

const getOnePsicologoAndUsers = async (req, res, next) => {
    const { id } = req.params;
    try {
        const psicolgo = await Psicologo.findByPk(id, { include: [{model: Usuario, 
        include:[ { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
        { model: Genero, attributes: ["genero"] },
        { model: Rol, attributes: ["name"] }]  }] });
        if (!psicolgo) {
            return res.status(404).send({ error: "Paciente no encontrado" });
        }
        return res.send(psicolgo);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const getPsicologosByProvincia = async (req, res, next) => {
    const { provincia } = req.params
    try {
        const psicologos = await Usuario.findAll({
            where: { rolId: 2 },
            include: [{ model: Psicologo, include: { model: Especialidades, attributes: ['especialidad'] }, attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
            { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
            { model: Genero, attributes: ["genero"] },
            { model: Rol, attributes: ["name"] }]
        })
        const psicologosProvincia = psicologos.filter(p => p.ciudad.provincium.name === provincia)
        if(!psicologosProvincia || psicologosProvincia.length === 0) return res.status(404).send("No se encontro ningun psicologo en esa provincia")
        res.send(psicologosProvincia)
    } catch (error) {
        next(error)
    }
}

const getPsicologosByCiudad = async (req, res, next) => {
    const { ciudad } = req.params
    try {
        const psicologos = await Usuario.findAll({
            where: { rolId: 2 },
            include: [{ model: Psicologo, include: { model: Especialidades, attributes: ['especialidad'] }, attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
            { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
            { model: Genero, attributes: ["genero"] },
            { model: Rol, attributes: ["name"] }]
        })
        const psicologosCiudad = psicologos.filter(p => p.ciudad.name === ciudad)
        if(!psicologosCiudad || psicologosCiudad.length === 0) return res.status(404).send("No se encontro ningun psicologo en esa Ciudad")
        res.send(psicologosCiudad)
    } catch (error) {
        next(error)
    }
}

const getPsicologosByEspecialidad = async (req, res, next) => {
    const { especialidad } = req.params
    try {
        const psicologos = await Usuario.findAll({
            where: { rolId: 2 },
            include: [{ model: Psicologo, include: { model: Especialidades, attributes: ['especialidad'] }, attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
            { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
            { model: Genero, attributes: ["genero"] },
            { model: Rol, attributes: ["name"] }]
        })
        const psicologosEspe = psicologos.filter(p => p.psicologo.especialidade.especialidad === especialidad)
        if(!psicologosEspe || psicologosEspe.length === 0) return res.status(404).send("No se encontro ningun psicologo en esa especialidad")
        res.send(psicologosEspe)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getPsicologo,
    postPsicologo,
    getOnePsicologoAndUsers,
    getPsicologosByProvincia,
    getPsicologosByCiudad,
    getPsicologosByEspecialidad
}