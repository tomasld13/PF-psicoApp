
const { getPacientes, grabarMensaje, getPsicologos, usuarioConectado, usuarioDesconectado } = require('./socketController');
const { Usuario } = require('../../db')
const {comprobarJWT} = require('../../helpers/generar-JWT');
class Sockets {

    constructor(io) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {


        this.io.on('connection', async (socket) => {

            const [valido, id] = comprobarJWT(socket.handshake.query['x-token']);
            
            if (!valido) {
                console.log('socket no identificado');
                return socket.disconnect();
            }

            await usuarioConectado(id);
            const user = await Usuario.findByPk(id)
            
            // Unir al usuario a una sala de socket.io
            socket.join(id);
            if(user.rolId === 2){
                this.io.emit('lista-usuarios', await getPacientes())//Aca va a emitir un arreglo con todos los usuarios,
            //Lo que yo quiero en mi server que estos usuarios sean los contactos paciente-psicologo. 
            }
            if(user.rolId===1){
                this.io.emit('lista-usuarios', await getPsicologos())//Aca va a emitir un arreglo con todos los usuarios,
                //Lo que yo quiero en mi server que estos usuarios sean los contactos paciente-psicologo. 
            }
            


            // TODO: Escuchar cuando el cliente manda un mensaje
            socket.on('mensaje-personal', async (payload) => {
                const mensaje = await grabarMensaje(payload);
                this.io.to(payload.para).emit('mensaje-personal', mensaje);
                this.io.to(payload.de).emit('mensaje-personal', mensaje);
            });


            // TODO: Disconnect
            // Marcar en la BD que el usuario se desconecto
            // TODO: Emitir todos los usuarios conectados
            socket.on('disconnect', async () => {
                await usuarioDesconectado(id);
                if(user.rolId === 2){
                    this.io.emit('lista-usuarios', await getPacientes())//Aca va a emitir un arreglo con todos los usuarios,
                //Lo que yo quiero en mi server que estos usuarios sean los contactos paciente-psicologo. 
                }
                if(user.rolId===1){
                    this.io.emit('lista-usuarios', await getPsicologos())//Aca va a emitir un arreglo con todos los usuarios,
                    //Lo que yo quiero en mi server que estos usuarios sean los contactos paciente-psicologo. 
                }
            })


        });
    }


}


module.exports = Sockets;