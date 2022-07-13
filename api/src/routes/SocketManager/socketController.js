const {Usuario, Mensaje, Paciente, Ciudad, Provincia, Genero, Rol} = require('../../db');



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
        where: { rolId: 1, state : true }, include: [{ model: Paciente, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
        { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
        { model: Genero, attributes: ["genero"] },
        { model: Rol, attributes: ["name"] }]
      });
        

    return usuarios;
}
const getPsicologos = async() => {

    const usuarios=await Usuario.findAll({
        where: { rolId: 2, state : true }, include: [{ model: Paciente, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
        { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
        { model: Genero, attributes: ["genero"] },
        { model: Rol, attributes: ["name"] }]
      });
        

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
    usuarioDesconectado
}

