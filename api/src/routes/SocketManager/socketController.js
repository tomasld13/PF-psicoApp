const { Socket } = require('socket.io');
const io = require('../../../index')

const socketController = (socket = new Socket(), io) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
}

module.exports = socketController;