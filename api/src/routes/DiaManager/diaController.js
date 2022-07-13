const {Dia, Horarios, Psicologo, Usuario} = require("../../db")

const getDias = async (req, res, next) => {
    const {id} = req.params
    console.log(id)
    try {
        const usuario = await Usuario.findByPk(id, {include:{model:Psicologo}})
        if(!usuario || !usuario.psicologo) return res.status(404).send({ error: "Usuario no encontrado" });
        const psicologo = await Psicologo.findByPk(usuario.psicologo.id, {include:{model:Dia, include:{model:Horarios}}})
        if(!psicologo) return res.status(404).send("No se encontro ningun psicologo con ese id")
        res.send(psicologo)
    } catch (error) {
        next(error)
    }
}

const postDias = async (req, res, next) => {
    const {id} = req.params
    const {date} = req.body
    try {
        const usuario = await Usuario.findByPk(id, {include:{model:Psicologo}})
        if(!usuario || !usuario.psicologo) return res.status(404).send({ error: "Usuario no encontrado" });
        const psicologo = await Psicologo.findByPk(usuario.psicologo.id, {include:{model:Dia, include:{model:Horarios}}})
        if(!psicologo) return res.status(404).send("No se encontro ningun psicologo con ese id") 
        console.log(date)
        const dia = await Dia.create({fecha:date})
        await psicologo.addDia(dia).then(async() => {
            const psicologoRes = await Psicologo.findByPk(usuario.psicologo.id, {include:{model:Dia, include:{model:Horarios}}})
            return res.send(psicologoRes)
        })
    } catch (error) {
        next(error)
    }
}

const deleteDias = async (req, res, next) => {
    const {id} = req.params
    const {date} = req.body
    try {
        const usuario = await Usuario.findByPk(id, {include:{model:Psicologo}})
        const psicologo = await Psicologo.findByPk(usuario.psicologo.id, {include:{model:Dia, include:{model:Horarios}}})
        console.log(psicologo)
        if(!psicologo) return res.status(404).send("No se encontro ningun psicologo con ese id") 
        const dia = psicologo.dia.find((d) => d.fecha == date)
        if(!dia) return res.send("no existe el dia")
        else if(dia.horarios.length > 0) return res.send({error:"El dia no puede eliminarse porque ya hay turnos reservados para esa fecha."})
        await dia.destroy().then(async() => {
            const psicologoRes = await Psicologo.findByPk(usuario.psicologo.id, {include:{model:Dia, include:{model:Horarios}}})
            return res.send(psicologoRes)
        })
    } catch (error) {
        next(error)
    }
}

module.exports={
    getDias,
    postDias,
    deleteDias
}