const { Psicologo, Usuario, Paciente, Horarios, Dia } = require("../../db");

const getHorariosPsicologo = async (req, res, next) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id, {include:{model:Psicologo}})
        if(!usuario || !usuario.psicologo) return res.status(404).send({ error: "Usuario no encontrado" });
        const psicologo = await Psicologo.findByPk(usuario.psicologo.id, {include: {model: Dia, include:{model: Horarios, include: {model: Paciente}}}})
        if(!psicologo) return res.status(404).send({ error: "Psicologo no encontrado" });
        return res.send(psicologo)
    } catch (error) {
        next(error)
    }
}

const getHorariosPaciente = async (req, res, next) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id, {include:{model:Paciente}})
        if(!usuario || !usuario.paciente) return res.status(404).send({ error: "Usuario no encontrado" });
        const paciente = await Paciente.findByPk(usuario.paciente.id)
        if(!paciente) return res.status(404).send({ error: "Paciente no encontrado" });
        let dias = await Dia.findAll({include:{model: Horarios,where:{pacienteId:parseInt(usuario.paciente.id)}}})
        return res.send({paciente, dias})
    } catch (error) {
        next(error)
    }
}

const postHorarioPsicologo = async(req, res, next) => {
    const { id } = req.params;
    const { date, time } = req.body
    //Formato Date: "date": "2022-06-30"
    //Formato Time: "time": "22:15:00"
    try {
        const usuario = await Usuario.findByPk(id, {include:{model:Psicologo}})
        if(!usuario || !usuario.psicologo) return res.status(404).send({ error: "Usuario no encontrado" });
        const psicologo = await Psicologo.findByPk(usuario.psicologo.id)
        if(!psicologo) return res.status(404).send({ error: "Psicologo no encontrado" });
        let dia = await Dia.findOne({where:{fecha:date}})
        if(!dia) dia = await Dia.create({fecha: date})
        const horario = await Horarios.create({hora: time})
        dia.addHorarios(horario)
        await psicologo.addHorarios(horario)
        await psicologo.addDia(dia)
        const psicologoRes = await Psicologo.findByPk(usuario.psicologo.id, {include:{model: Dia ,include: {model: Horarios}}})
        res.send(psicologoRes)
    } catch (error) {
        next(error)
    }
}

const updateHorario = async(req, res, next) => {
    const {id} = req.params
    const {horarioID, newDate, newTime} = req.body
    //Formato Date: "date": "2022-06-30"
    //Formato Time: "time": "22:15:00"
    try {
        if(!newDate){
            const usuario = await Usuario.findByPk(id, {include:{model:Psicologo}})
            if(!usuario || !usuario.psicologo) return res.status(404).send({ error: "Usuario no encontrado" });
            const psicologo = await Psicologo.findByPk(usuario.psicologo.id)
            if(!psicologo) return res.status(404).send({ error: "Psicologo no encontrado" });
            const horario = await Horarios.findByPk(horarioID)
            if(!horario) return res.status(404).send({ error: "Horario no encontrado" });
            await horario.update({hora: newTime})
            const psicologoRes = await Psicologo.findByPk(usuario.psicologo.id, {include: {model: Dia, include:{model: Horarios, include: {model: Paciente}}}})
            return res.send(psicologoRes)
        }else{
            const usuario = await Usuario.findByPk(id, {include:{model:Psicologo}})
            const psicologo = await Psicologo.findByPk(usuario.psicologo.id)
            if(!psicologo) return res.status(404).send({ error: "Psicologo no encontrado" });
            let dia = await Dia.findOne({where:{fecha:newDate}})
            if(!dia) dia = await Dia.create({fecha: newDate})
            const horario = await Horarios.findByPk(horarioID)
            if(!horario) return res.status(404).send({ error: "Horario no encontrado" });
            const horarioUp = await horario.update({hora: newTime})
            await dia.addHorarios(horarioUp)
            await psicologo.addDia(dia)
            const psicologoRes = await Psicologo.findByPk(usuario.psicologo.id, {include: {model: Dia, include:{model: Horarios, include: {model: Paciente}}}})
            return res.send(psicologoRes)
        }
    } catch (error) {
        next(error)
    }
}

const deleteHorario = async(req, res, next) => {
    const {id} = req.params
    const {horarioID} = req.body
    //Formato Date: "date": "2022-06-30T22:15:00.000Z"
    try {
        const usuario = await Usuario.findByPk(id, {include:{model:Psicologo}})
        if(!usuario || !usuario.psicologo) return res.status(404).send({ error: "Usuario no encontrado" });
        const psicologo = await Psicologo.findByPk(usuario.psicologo.id)
        if(!psicologo) return res.status(404).send({ error: "Psicologo no encontrado" });
        const horario = await Horarios.findByPk(horarioID)
        if(!horario) return res.status(404).send({ error: "Horario no encontrado" });
        await horario.destroy()
        const psicologoRes = await Psicologo.findByPk(usuario.psicologo.id, {include:{model: Dia, include: {model: Horarios}}})
        res.send(psicologoRes)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getHorariosPsicologo,
    getHorariosPaciente,
    postHorarioPsicologo,
    deleteHorario,
    updateHorario
}