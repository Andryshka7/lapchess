const restartHandlers = (socket) => {
    socket.on('UPDATE_READY_TO_RESTART', (id, payload) => {
        socket.to(id).emit('UPDATE_READY_TO_RESTART', payload)
    })

    socket.on('LEAVE_FROM_GAME', (id) => {
        socket.to(id).emit('OPPONENT_LEFT')
    })

    socket.on('RESTART_GAME', (id, restartTime) => {
        socket.to(id).emit('RESTARTED_GAME', restartTime)
    })
}

export default restartHandlers
