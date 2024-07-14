import gameHandlers from './handlers/game handlers/index.js'
import roomHandlers from './handlers/roomHandlers.js'

const handleSocketEvents = (socket) => {
	socket.on('JOIN_ROOM', (id) => {
		socket.join(id)
	})
	socket.on('LEAVE_ROOM', (id) => {
		socket.leave(id)
	})

	gameHandlers(socket)
	roomHandlers(socket)
}

export default handleSocketEvents
