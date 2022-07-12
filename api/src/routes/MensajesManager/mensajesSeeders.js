const {Mensaje, Usuario} = require('../../db');

const createMessage =async()=>{
    try {
        const usuario1 = await Usuario.findByPk(1);
        const usuario2 = await Usuario.findByPk(2);
        const psicologo1 = await Usuario.findByPk(33);
        const psicologo2 = await Usuario.findByPk(34);
        const mensajesUsuario = ["hola","mundo","cómo","estás","quiero un turno"];
        const mensajesPsicolo = ["Perfecto", "Que disponibilidad tendria", "Ahora estoy gestionando eso"];

        mensajesUsuario.map(async(m)=>{
            setTimeout(async()=>{
                const messageUsuario1 = await Mensaje.create({mensaje : m, de : usuario1.id, para: psicologo1.id});
            },2000)
            setTimeout(async()=>{
                const messageUsuario2 = await Mensaje.create({mensaje : m, de : usuario1.id, para: psicologo2.id});
            },2000)
        });
        mensajesPsicolo.map(async(m)=>{
            setTimeout(async()=>{
                const messagePsicologo1 = await Mensaje.create({mensaje : m, de : psicologo1.id, para: usuario1.id});
            },2000)
            setTimeout(async()=>{
                const messagePsicologo2 = await Mensaje.create({mensaje : m, de : psicologo2.id, para: usuario1.id});
            },2000)
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = createMessage;