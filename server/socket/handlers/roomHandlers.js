const roomHandlers = (socket) => {
    socket.on('CREATE_ROOM', (room) => {
        socket.broadcast.emit('ROOM_CREATED', room)
    })
    socket.on('DELETE_ROOM', (id) => {
        socket.broadcast.emit('ROOM_DELETED', id)
    })
}

export default roomHandlers
