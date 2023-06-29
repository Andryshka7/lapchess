const drawHandlers = (socket) => {
    socket.on('SEND_DRAW', (id) => {
        socket.to(id).emit('OPPONENT_SUGGESTED_DRAW')
    })

    socket.on('CANCEL_DRAW', (id) => {
        socket.to(id).emit('OPPONENT_CANCELLED_DRAW')
    })

    socket.on('DECLINE_DRAW', (id) => {
        socket.to(id).emit('OPPONENT_DECLINED_DRAW')
    })

    socket.on('ACCEPT_DRAW', (id, drawTime) => {
        socket.to(id).emit('OPPONENT_ACCEPTED_DRAW', drawTime)
    })
}

export default drawHandlers
