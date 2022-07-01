const {Dia, Horarios, Psicologo} = require("../../db")

const getDias = async (req, res, next) => {
    const {id} = req.params
    try {
        const psicologo = await Psicologo.findByPk(id, {include:{model:Dia, include:{model:Horarios}}})
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
        const psicologo = await Psicologo.findByPk(id, {include:{model:Dia, include:{model:Horarios}}})
        if(!psicologo) return res.status(404).send("No se encontro ningun psicologo con ese id") 
        const dia = await Dia.create({fecha:date})
        await psicologo.addDia(dia)
        const psicologoRes = await Psicologo.findByPk(id, {include:{model:Dia, include:{model:Horarios}}})
        res.send(psicologoRes)
    } catch (error) {
        next(error)
    }
}

const deleteDias = async (req, res, next) => {
    const {id} = req.params
    const {date} = req.body
    try {
        const psicologo = await Psicologo.findByPk(id, {include:{model:Dia, include:{model:Horarios}}})
        if(!psicologo) return res.status(404).send("No se encontro ningun psicologo con ese id") 
        const dia = await Dia.findOne({where:{fecha:date}})
        await dia.destroy()
        const psicologoRes = await Psicologo.findByPk(id, {include:{model:Dia, include:{model:Horarios}}})
        res.send(psicologoRes)
    } catch (error) {
        next(error)
    }
}

module.exports={
    getDias,
    postDias,
    deleteDias
}