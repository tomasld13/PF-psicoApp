
const { getPacientes, grabarMensaje, getPsicologos, usuarioConectado, usuarioDesconectado, getUsuarios } = require('./socketController');
const { Usuario, Favoritos, Paciente, Psicologo } = require('../../db')
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
            console.log("Soy el usuario que se conecta el socket: ",user.toJSON());
            // Unir al usuario a una sala de socket.io
            socket.join(id);
            if(user.rolId === 2){
                this.io.emit('lista-usuarios', await getPacientes())//Aca va a emitir un arreglo con todos los usuarios,
            //Lo que yo quiero en mi server que estos usuarios sean los contactos paciente-psicologo. 
            }
            if(user.rolId===1){
                let paciente = await Usuario.findByPk(id, {
                    include : [
                        {model: Paciente, include : [
                            {model: Favoritos, attributes : ["idPsico"]}
                        ], attributes : { exclude: ["fk_usuarioID"] } }
                    ]
                });
                console.log(paciente.toJSON());
                this.io.emit('lista-usuarios', await getPsicologos(user))//Aca va a emitir un arreglo con todos los usuarios,
                //Lo que yo quiero en mi server que estos usuarios sean los contactos paciente-psicologo. 
            }
            if(user.rolId === 3){
                this.io.emit('lista-usuarios', await getUsuarios())
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
                if(user.rolId===3){
                    this.io.emit('lista-usuarios', await getUsuarios())
                }
            })


        });
    }


}


module.exports = Sockets;