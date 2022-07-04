
const { usuarioConectado,
    usuarioDesconectado,
    grabarMensaje,
    getUsuarios } = require('./socketController');

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

            // Unir al usuario a una sala de socket.io
            socket.join(id);
            

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
                this.io.emit('lista-usuarios', await getUsuarios())
            })


        });
    }


}


module.exports = Sockets;