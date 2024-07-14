import { createGameQuery } from 'api/chess games'
import { deleteRoomQuery } from 'api/rooms'
import { opposite } from 'helpers'
import { updateGame, updateGameId } from 'pages/lobby/modules/chess/redux/actions'
import { removeRoom } from 'pages/lobby/modules/rooms/redux/actions'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'redux/store'
import socket from 'socket'
import { Room } from 'types'

import { createDocument, createTime } from './helpers'

const useStartGame = () => {
	const dispatch = useDispatch()
	const guest = useAppSelector((store) => store.auth.user)

	return async (room: Room) => {
		const gameId = room._id
		const roomColor = room.actualColor

		const color = opposite(roomColor)
		const time = createTime(room.time)

		const [white, black] = color === 'w' ? [guest, room.user] : [room.user, guest]

		const document = createDocument(white, black, time, gameId)

		await createGameQuery(document)
		await deleteRoomQuery(gameId)

		dispatch(removeRoom(gameId))

		dispatch(updateGameId(gameId))
		dispatch(updateGame({ white, black, time, color }))

		socket.emit('JOIN_ROOM', gameId)
		socket.emit('DELETE_ROOM', gameId)
		socket.emit('GAME_INITIALIZED', gameId, { white, black, time, color: roomColor })
	}
}

export default useStartGame
