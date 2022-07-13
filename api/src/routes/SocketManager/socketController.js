const {Usuario, Mensaje, Paciente, Ciudad, Provincia, Genero, Rol, Psicologo} = require('../../db');
const { Op } = require("sequelize");


const usuarioConectado = async( id ) => {

    const usuario = await Usuario.findByPk(id);
    usuario.online = true;
    await usuario.save();
    
    return usuario;
}

const usuarioDesconectado = async( id ) => {
    const usuario = await Usuario.findByPk(id);
    usuario.online = false;
    await usuario.save();
    
    return usuario;
}

const getPacientes = async() => {

    const usuarios=await Usuario.findAll({
        where: { rolId: 1, state : true }, include: [{ model: Paciente, where : {

        }, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
        { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
        { model: Genero, attributes: ["genero"] },
        { model: Rol, attributes: ["name"] }]
      });
        

    return usuarios;
}
const getPsicologos = async(idPsicos) => {
    try {
        const psicologos = await Psicologo.findAll({where : {
            id : {
                [Op.or] : idPsicos
            }
            
        }, attributes : ["fk_usuarioID"]
        });
        const idUsuarios = psicologos?.map(p=>{
            let user = p.toJSON();
            return user.fk_usuarioID;
        });
        
        const usuarios = await Usuario.findAll({where : {
            id : {
                [Op.or] : idUsuarios
            }
        }})   
        
        return usuarios;
    } catch (error) {
        console.log(error)
    }
}
const getUsuarios = async ()=>{
    const usuarios = await Usuario.findAll();
    return usuarios;
}

const grabarMensaje = async( payload ) => {
    
    try {
        
        const mensaje = await Mensaje.create( payload );
        

        return mensaje;

    } catch (error) {
        console.log(error);
        return false;
    }

}


module.exports = {
    getPsicologos,
    getPacientes,
    grabarMensaje,
    usuarioConectado,
    usuarioDesconectado,
    getUsuarios
}

