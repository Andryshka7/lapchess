import drawHandlers from './drawHandlers.js'
import restartHandlers from './restartHandlers.js'

const gameHandlers = (socket) => {
    socket.on('GAME_INITIALIZED', (id, payload) => {
        socket.to(id).emit('GAME_INITIALIZED', payload)
    })

    socket.on('HANDLE_MOVE', (id, payload) => {
        socket.to(id).emit('HANDLE_MOVE', payload)
    })

    socket.on('HANDLE_PROMOTED_PAWN', (id, payload) => {
        socket.to(id).emit('HANDLE_PROMOTED_PAWN', payload)
    })

    socket.on('PLAYER_RESIGNED', (id, player) => {
        socket.to(id).emit('PLAYER_RESIGNED', player)
    })

    drawHandlers(socket)
    restartHandlers(socket)
}

export default gameHandlers
