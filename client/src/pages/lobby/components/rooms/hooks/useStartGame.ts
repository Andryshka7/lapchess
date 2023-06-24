import { useAppSelector } from 'redux/store'
import { useDispatch } from 'react-redux'
import { createGame } from 'api/chess games'
import { deleteRoom } from 'api/rooms'
import { initializeGame, removeRoom, updateGameConfig } from 'pages/lobby/redux/actions'
import createDocument from './helpers/createDocument'
import { Room } from 'types'
import socket from 'socket'
import { opposite } from 'helpers'

const useStartGame = () => {
    const dispatch = useDispatch()
    const guest = useAppSelector((store) => store.auth.user)

    return async (room: Room) => {
        // const time = room.time
        const gameId = room._id
        const roomColor = room.actualColor

        const color = opposite(roomColor)

        const [white, black] = color === 'w' ? [guest, room.user] : [room.user, guest]

        const document = createDocument(white, black, gameId)

        await createGame(document)
        await deleteRoom(gameId)

        dispatch(removeRoom(gameId))

        dispatch(updateGameConfig({ gameId, color }))
        dispatch(initializeGame({ white, black }))

        socket.emit('JOIN_ROOM', gameId)
        socket.emit('DELETE_ROOM', gameId)
        socket.emit('GAME_INITIALIZED', gameId, { white, black })
    }
}

export default useStartGame
