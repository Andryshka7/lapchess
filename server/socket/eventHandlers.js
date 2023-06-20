const handleSocketEvents = (socket) => {
    socket.on('CREATE_ROOM', (room) => {
        socket.broadcast.emit('ROOM_CREATED', room)
    })
    socket.on('DELETE_ROOM', (id) => {
        socket.broadcast.emit('ROOM_DELETED', id)
    })
    socket.on('JOIN_ROOM', (id) => {
        socket.join(id)
    })
    socket.on('GAME_INITIALIZED', (id, payload) => {
        socket.to(id).emit('GAME_INITIALIZED', payload)
    })

    socket.on('HANDLE_MOVE', (id, payload) => {
        socket.to(id).emit('HANDLE_MOVE', payload)
    })
    socket.on('HANDLE_PROMOTED_PAWN', (gameId, payload) => {
        socket.to(gameId).emit('HANDLE_PROMOTED_PAWN', payload)
    })

    socket.on('UPDATE_READY_TO_RESTART', (id, payload) => {
        socket.to(id).emit('UPDATE_READY_TO_RESTART', payload)
    })

    socket.on('LEAVE_FROM_GAME', (id) => {
        socket.to(id).emit('OPPONENT_LEFT')
    })

    socket.on('PLAYER_RESIGNED', async (id, player) => {
        socket.to(id).emit('PLAYER_RESIGNED', player)
    })

    socket.on('RESTART_GAME', async (id) => {
        socket.to(id).emit('RESTARTED_GAME')
    })
}

export default handleSocketEvents
