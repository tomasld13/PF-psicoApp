const {Psicologo, Paciente, Mensaje} = require('../../db');
const Usuario = require('../../models/Usuario');




const getUsuarios = async(id) => {

    const usuarios=await Usuario.findAll({
        where: { rolId: 1, state : true }, include: [{ model: Paciente, where, attributes: { exclude: ["fk_usuarioID", "fk_especialidadId"] } },
        { model: Ciudad, include: { model: Provincia, attributes: ['name'] }, attributes: ['name'] },
        { model: Genero, attributes: ["genero"] },
        { model: Rol, attributes: ["name"] }]
      });
        

    return usuarios;
}

const grabarMensaje = async( payload ) => {
    
    try {
        
        const mensaje = new Mensaje( payload );
        await mensaje.save();

        return mensaje;

    } catch (error) {
        console.log(error);
        return false;
    }

}


module.exports = {
    
    getUsuarios,
    grabarMensaje
}

