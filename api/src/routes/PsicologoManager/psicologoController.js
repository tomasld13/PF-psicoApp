const { Psicologo, Usuario, Paciente, Ciudad, Provincia, Genero, Rol, Especialidades, Servicio, Precio } = require("../../db");
const bcrypt = require('bcryptjs');

const getPsicologo = async (req, res, next) => {
    Usuario.findAll({
        where: { rolId: 2},
        include: [{ model: Psicologo, include: [{ model: Especialidades, attributes: ['especialidad']}, {model: Servicio, include: [{model: Precio, attributes: ['costo']}] }], attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
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
    const { name, lastname, email, telephone, address, birth, rol, gener, ciudad, yearsExperience , especialidad, password} = req.body;
    try {
        const newUSuario = await Usuario.create({ name, lastname, email, telephone, address, birth, password: bcrypt.hashSync(password, 10) });
        const newPsicologo = await Psicologo.create({ yearsExperience });
        const role = await Rol.findOne({ where: { name: rol } });
        const genero = await Genero.findOne({ where: { genero: gener } });
        const city = await Ciudad.findOne({ where: { name: ciudad } });
        const espe = await Especialidades.findOne({where : {'especialidad' : especialidad}});


        newUSuario.setPsicologo(newPsicologo);
        newUSuario.setRol(role);
        newUSuario.setGenero(genero);
        newUSuario.setCiudad(city);
        newPsicologo.setEspecialidades(espe);
        
        res.status(200).send([newUSuario,newPsicologo]);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }

}

const postServicioPsicologo = async (req, res, next) => {
    const { id } = req.params;
    const { servicio, precio } = req.body;
    try {
        const psicologo = await Psicologo.findByPk(id);
        if (!psicologo) {
            return res.status(404).send({ error: "Psicologo no encontrado" });
        }
        const newServicio = await Servicio.findOne({ where: {servicio : servicio}});
        if(!newServicio) return res.status(404).send({ error: "Servicio no encontrado" });
        const newPrecio = await Precio.create({ costo: precio });
        newServicio.setPrecios(newPrecio);
        psicologo.addServicio(newServicio);
        res.send([newServicio, newPrecio]);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const getOnePsicologoAndUsers = async (req, res, next) => {
    const { id } = req.params;
    try {
        const psicologo = await Psicologo.findByPk(id, { include: [{model: Usuario, 
        include:[ { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
        { model: Genero, attributes: ["genero"] },
        { model: Rol, attributes: ["name"] }]  }, { model: Especialidades, attributes: ['especialidad']},  {model: Servicio, include: [{model: Precio, attributes: ['costo']}] }]});
        if (!psicologo) {
            return res.status(404).send({ error: "Psicologo no encontrado" });
        }
        return res.send(psicologo);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}

const getPsicologosByProvincia = async (req, res, next) => {
    const { provincia } = req.params
    try {
        const psicologos = await Usuario.findAll({
            where: { rolId: 2 },
            include: [{ model: Psicologo, include: [{ model: Especialidades, attributes: ['especialidad']}, {model: Servicio, include: [{model: Precio, attributes: ['costo']}] }], attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
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
            include: [{ model: Psicologo, include: [{ model: Especialidades, attributes: ['especialidad']}, {model: Servicio, include: [{model: Precio, attributes: ['costo']}] }], attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
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
            include: [{ model: Psicologo, include: [{ model: Especialidades, attributes: ['especialidad']}, {model: Servicio, include: [{model: Precio, attributes: ['costo']}] }], attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
        { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
        { model: Genero, attributes: ["genero"] },
        { model: Rol, attributes: ["name"] }]
        })
        const psicologosEspe = psicologos.filter(p => p.psicologo.especialidades[0].especialidad === especialidad)
        if(!psicologosEspe || psicologosEspe.length === 0) return res.status(404).send("No se encontro ningun psicologo en esa especialidad")
        res.send(psicologosEspe)
    } catch (error) {
        next(error)
    }
}

const getPsicologosByGenero = async (req, res, next) => {
    const { genero } = req.params
    try {
        const psicologos = await Usuario.findAll({
            where: { rolId: 2 },
            include: [{ model: Psicologo, include: [{ model: Especialidades, attributes: ['especialidad']}, {model: Servicio, include: [{model: Precio, attributes: ['costo']}] }], attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
        { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
        { model: Genero, attributes: ["genero"] },
        { model: Rol, attributes: ["name"] }]
        })
        const psicologosGenero = psicologos.filter(p => p.genero.genero === genero)
        if(!psicologosGenero || psicologosGenero.length === 0) return res.status(404).send("No se encontro ningun psicologo con ese genero")
        res.send(psicologosGenero)
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
    getPsicologosByEspecialidad,
    postServicioPsicologo,
    getPsicologosByGenero
}