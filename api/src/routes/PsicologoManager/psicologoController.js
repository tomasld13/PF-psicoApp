const { Psicologo, Usuario, Paciente, Ciudad, Provincia, Genero, Rol, Especialidades, Servicio, Dia, Precio, Horarios, Factura } = require("../../db");
const bcrypt = require('bcryptjs');

const getMonth = (month) => {
    switch(month){
    case "Jan":
        return 1
    case "Feb":
        return 2
    case "Mar":
        return 3
    case "Apr":
        return 4
    case "May":
        return 5
    case "Jun":
        return 6
    case "Jul":
        return 7
    case "Aug":
        return 8
    case "Sep":
        return 9
    case "Oct":
        return 10
    case "Nov":
        return 11
    default:
        return 12                       
    }
}

const checkDia = async (id) => {
    let diaActual = new Date().toString().split(" ")
    diaActual =[diaActual[3],getMonth(diaActual[1]) > 10 ? getMonth(diaActual[1]) : "0" + getMonth(diaActual[1]),diaActual[2]]
    /*let dias = await Dia.findAll()
    dias = await dias.map( async (d) => {
        let dia = d.fecha.split("-")
        dia = new Date(dia[0],dia[1]-1,dia[2])
        if(dia < new Date()) await d.destroy()
    })*/
    let diaMesProximo = parseInt(diaActual[1])+1
    diaMesProximo = [diaActual[0], diaMesProximo.toString(), diaActual[2]]
    const psicologo = await Psicologo.findByPk(id, {includes: {model: Dia}})
    let año = diaActual[0]
    let mes = diaActual[1]
    let dia = diaActual[2]
    let diasACrear = []
    
    while(new Date(`${año}-${mes < 10 ? "0" + mes : mes}-${dia}`) <= new Date(`${diaMesProximo[0]}-${diaMesProximo[1]}-${diaMesProximo[2]}`)){
        if(parseInt(dia) === 31){
            mes = parseInt(mes) + 1
            mes.toString()
        }
        if(parseInt(mes) === 12){
            año = parseInt(año) + 1
            año.toString()
            mes = "0"
        }
        else{
            if(parseInt(dia) === 31) {
                dia = "1"
            }
            else{
                dia = parseInt(dia) + 1
                dia.toString()
            }
        }
        let diaWhile = await Dia.create({fecha: `${año}-${mes}-${dia}`})
        diasACrear.push(diaWhile)
    }
    diasACrear.map( async (d) => {
        psicologo.addDia(d)
    })
}
const getPsicologo = async (req, res, next) => {
    Usuario.findAll({
        where: { rolId: 2 },
        include: [{ model: Psicologo, include: [{ model: Especialidades, attributes: ['especialidad'] }, { model: Servicio, include: [{ model: Precio, attributes: ['costo'] }] }, {model: Factura}], attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
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
    const { name, lastname, email, telephone, address, birth, rol, gener, ciudad, yearsExperience, especialidad, password, inicioHorario, finHorario, intervaloSesion, cbu, matriculaProfesional, dni, sobreMi } = req.body;
    try {
        const newUSuario = await Usuario.create({ name, lastname, email, telephone, address, birth, password: bcrypt.hashSync(password, 10) });
        const newPsicologo = await Psicologo.create({ yearsExperience, inicioHorario, finHorario, dni, intervaloSesion, cbu, matriculaProfesional, sobreMi });
        const role = await Rol.findOne({ where: { name: rol } });
        const genero = await Genero.findOne({ where: { genero: gener } });
        const city = await Ciudad.findOne({ where: { name: ciudad } });
        const espe = await Especialidades.findOne({ where: { 'especialidad': especialidad } });
        newUSuario.setPsicologo(newPsicologo);
        newUSuario.setRol(role);
        newUSuario.setGenero(genero);
        newUSuario.setCiudad(city);
        newPsicologo.setEspecialidades(espe);
        await checkDia(newPsicologo.id);
        
        res.status(200).send([newUSuario, newPsicologo]);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }

}

const postServicioPsicologo = async (req, res, next) => {

    const { id } = req.params;
    const { servicio, precio } = req.body.body;
    console.log(req.body)
    try {
    
        const usuario = await Usuario.findByPk(id, { include: [{ model: Psicologo, attributes: ['id'] }] });
        const psicologo = await Psicologo.findByPk(usuario.psicologo.id, { include: [{ model: Servicio }] });
        const newServicio = await Servicio.findOne({ where: { servicio : servicio } });
        const newPrecio = await Precio.create({ costo: precio });
        const servicioPsico = psicologo.servicios.find(s => s.servicio === newServicio.servicio);
        if(servicioPsico){
            servicioPsico.setPrecios(newPrecio);
            return res.send([servicioPsico, newPrecio]);
        }
        newServicio.setPrecios(newPrecio);
        psicologo.addServicio(newServicio);
        res.send([newServicio, newPrecio]);
    } catch (error) {
    next(error);
    }
}

const getOnePsicologoAndUsers = async (req, res, next) => {
    const { id } = req.params;
    try {
        const psicologo = await Psicologo.findByPk(id, {
            include: [{
                model: Usuario,
                include: [{ model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
                { model: Genero, attributes: ["genero"] },
                { model: Rol, attributes: ["name"] }]
            }, { model: Especialidades, attributes: ['especialidad'] }, { model: Servicio, include: [{ model: Precio, attributes: ['costo'] }] },
            { model: Dia, include: { model: Horarios } }]
        });
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
            include: [{ model: Psicologo, include: [{ model: Especialidades, attributes: ['especialidad'] }, { model: Servicio, include: [{ model: Precio, attributes: ['costo'] }] }], attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
            { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
            { model: Genero, attributes: ["genero"] },
            { model: Rol, attributes: ["name"] }]
        })
        const psicologosProvincia = psicologos.filter(p => p.ciudad.provincium.name === provincia)
        if (!psicologosProvincia || psicologosProvincia.length === 0) return res.status(404).send("No se encontro ningun psicologo en esa provincia")
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
            include: [{ model: Psicologo, include: [{ model: Especialidades, attributes: ['especialidad'] }, { model: Servicio, include: [{ model: Precio, attributes: ['costo'] }] }], attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
            { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
            { model: Genero, attributes: ["genero"] },
            { model: Rol, attributes: ["name"] }]
        })
        const psicologosCiudad = psicologos.filter(p => p.ciudad.name === ciudad)
        if (!psicologosCiudad || psicologosCiudad.length === 0) return res.status(404).send("No se encontro ningun psicologo en esa Ciudad")
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
            include: [{ model: Psicologo, include: [{ model: Especialidades, attributes: ['especialidad'] }, { model: Servicio, include: [{ model: Precio, attributes: ['costo'] }] }], attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
            { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
            { model: Genero, attributes: ["genero"] },
            { model: Rol, attributes: ["name"] }]
        })
        const psicologosEspe = psicologos.filter(p => p.psicologo.especialidades[0].especialidad === especialidad)
        if (!psicologosEspe || psicologosEspe.length === 0) return res.status(404).send("No se encontro ningun psicologo en esa especialidad")
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
            include: [{ model: Psicologo, include: [{ model: Especialidades, attributes: ['especialidad'] }, { model: Servicio, include: [{ model: Precio, attributes: ['costo'] }] }], attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
            { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
            { model: Genero, attributes: ["genero"] },
            { model: Rol, attributes: ["name"] }]
        })
        const psicologosGenero = psicologos.filter(p => p.genero.genero === genero)
        if (!psicologosGenero || psicologosGenero.length === 0) return res.status(404).send("No se encontro ningun psicologo con ese genero")
        res.send(psicologosGenero)
    } catch (error) {
        next(error)
    }
}

const updatePsicologo = async (req, res, next) => {
    const { id } = req.params
    const { name, lastname, email, telephone, address, birth, gener, ciudad, yearsExperience, password, inicioHorario, finHorario, intervaloSesion, cbu, sobreMi, matriculaProfesional } = req.body;
    try {
        const psicologo = await Psicologo.findByPk(id, {
            include: [{
                model: Usuario,
                include: [{ model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
                { model: Genero, attributes: ["genero"] },
                { model: Rol, attributes: ["name"] }]
            }, { model: Especialidades, attributes: ['especialidad'] }, { model: Servicio, include: [{ model: Precio, attributes: ['costo'] }] },
            { model: Dia, include: { model: Horarios } }]
        });
        if (!psicologo) return res.status(404).send({ error: "Psicologo no encontrado" });
        if (typeof intervaloSesion === "number") await psicologo.update({ intervaloSesion: intervaloSesion })
        if (inicioHorario && inicioHorario.length > 1) await psicologo.update({ inicioHorario: inicioHorario })
        if (finHorario && finHorario.length > 1) await psicologo.update({ finHorario: finHorario })
        if (typeof yearsExperience === "number") await psicologo.update({ yearsExperience: yearsExperience })
        if (cbu) await psicologo.update({ cbu: cbu })
        if (sobreMi) await psicologo.update({ sobreMi: sobreMi })
        if (matriculaProfesional) await psicologo.update({ matriculaProfesional: matriculaProfesional })

        if (name) await psicologo.usuario.update({ name: name })
        if (lastname) await psicologo.usuario.update({ lastname: lastname })
        if (email) email == psicologo.usuario.email ? null : await psicologo.usuario.update({ email: email })
        if (telephone) await psicologo.usuario.update({ telephone: telephone })
        if (address) await psicologo.usuario.update({ address: address })
        if (birth) await psicologo.usuario.update({ birth: birth })
        if (gener) await psicologo.usuario.setGenero(await Genero.findOne({ where: { genero: gener } }));
        if (ciudad) await psicologo.usuario.setCiudad(await Ciudad.findOne({ where: { name: ciudad } }));
        if (password) await psicologo.usuario.update({ password: bcrypt.hashSync(password, 10) })
        const psicologoRes = await Psicologo.findByPk(id, {
            include: [{
                model: Usuario,
                include: [{ model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
                { model: Genero, attributes: ["genero"] },
                { model: Rol, attributes: ["name"] }]
            }, { model: Especialidades, attributes: ['especialidad'] }, { model: Servicio, include: [{ model: Precio, attributes: ['costo'] }] },
            { model: Dia, include: { model: Horarios } }]
        });
        return res.send(psicologoRes)
    } catch (error) {
        next(error)
    }
};
const suspenderPsicologo = async (req, res) => {
    const { id } = req.params;
    try {
      await Usuario.update({ state: false }, {
        where: {
          id: id
        }
      });
  
      const user = await Usuario.findOne({
        where: { id: id }, include: [{ model: Psicologo, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
        { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
        { model: Genero, attributes: ["genero"] },
        { model: Rol, attributes: ["name"] }]
      });
  
      res.status(200).json({
        ok: true,
        user
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Hable con el administrador",
      });
    }
  };
  const activarPsicologo = async (req, res) => {
    const { id } = req.params;
    try {
      await Usuario.update({ state: true }, {
        where: {
          id: id
        }
      });
  
      const user = await Usuario.findOne({
        where: { id: id }, include: [{ model: Psicologo, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
        { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
        { model: Genero, attributes: ["genero"] },
        { model: Rol, attributes: ["name"] }]
      });
  
      res.status(200).json({
        ok: true,
        user
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Hable con el administrador",
      });
    }
  };

const totalAPagar = async (req, res, next) => {
    const {id} = req.params
    try {
        let saldo = 0
        let facturas = await Factura.findAll({include:{model:Psicologo}})
        const user = await Usuario.findOne({
            where: { id: id }, include: [{ model: Psicologo, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
            { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
            { model: Genero, attributes: ["genero"] },
            { model: Rol, attributes: ["name"] }]
          });
        if(!user && !user.psicologo ) res.status(404).send("No existe un psicologo con ese id")
        facturas = facturas.filter((f) => {
            if(f.psicologoId == user.psicologo.id && !f.saldado){
                saldo += f.precio
                return true
            }
        })
        res.send({saldo: saldo*0.1, facturas})
    } catch (error) {
        next(error)
    }
}

const getSobreMiPsicologo = async (req, res, next) => {
    const {id} = req.params
    try {
        const psicologo = await Psicologo.findByPk(id, {attributes: ['sobreMi']})
        if(!psicologo) res.status(404).send("No existe un psicologo con ese id")
        res.send(psicologo)
    } catch (error) {
        next(error)
    }
}

const postSobreMiPsicologo = async (req, res, next) => {
    const {id} = req.params
    const {sobreMi} = req.body.body
    try {
        const user = await Usuario.findOne({
            where: { id: id }, include: [{ model: Psicologo, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
            { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
            { model: Genero, attributes: ["genero"] },
            { model: Rol, attributes: ["name"] }]
          });
        if(!user.psicologo) res.status(404).send("No existe un psicologo con ese id")
        await user.psicologo.update({sobreMi: sobreMi})
        res.send(user.psicologo.sobreMi)
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
    getPsicologosByGenero,
    updatePsicologo,
    suspenderPsicologo,
    activarPsicologo,
    totalAPagar,
    getSobreMiPsicologo,
    postSobreMiPsicologo
}