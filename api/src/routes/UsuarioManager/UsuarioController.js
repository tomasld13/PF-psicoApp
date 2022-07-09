const {Usuario, Psicologo, Paciente, Especialidades, Ciudad, Genero, Provincia, Rol, Servicio, Precio} = require("../../db")

const getUserByEmail = async (req, res, next) => {
    const { email } = req.params
    try {
        let usuario = await Usuario.findOne({where:{email:email}})
        if(!usuario) res.status(404).send("No se encontró ningún usuario con ese email.")
        if(usuario.rolId == 1){
            usuario = await Usuario.findByPk(usuario.id,{
                include: [{ model: Paciente, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
                { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
                { model: Genero, attributes: ["genero"] },
                { model: Rol, attributes: ["name"] }]
              })
        }else{
            usuario = await Usuario.findByPk(usuario.id,{
                include: [{ model: Psicologo, include: [{ model: Especialidades, attributes: ['especialidad'] }, { model: Servicio, include: [{ model: Precio, attributes: ['costo'] }] }], attributes: { exclude: ["fk_usuarioID", "especialidadeId"] } },
                { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
                { model: Genero, attributes: ["genero"] },
                { model: Rol, attributes: ["name"] }]
            })
        }
        res.send(usuario)
    } catch (error) {
        next(error)
    }
}

module.exports = getUserByEmail