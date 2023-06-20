import { useAppSelector } from 'redux/store'
import { useDispatch } from 'react-redux'
import { createGame } from 'api/chess games'
import { deleteRoom } from 'api/rooms'
import { initializeGame, removeRoom } from 'pages/lobby/redux/actions'
import { getColor, createDocument } from './helpers'
import { Room } from 'types'
import socket from 'socket'
import { opposite } from 'helpers'

const useStartGame = () => {
    const dispatch = useDispatch()
    const guest = useAppSelector((store) => store.auth.user)

    return async (room: Room) => {
        // const time = room.time
        const gameId = room._id

        const color = getColor(room.color)
        const [white, black] = color === 'w' ? [guest, room.user] : [room.user, guest]

        const document = createDocument(white, black, gameId)

        await createGame(document)
        await deleteRoom(gameId)

        dispatch(removeRoom(gameId))
        dispatch(initializeGame({ white, black, gameId, color }))

        socket.emit('JOIN_ROOM', gameId)
        socket.emit('DELETE_ROOM', gameId)
        socket.emit('GAME_INITIALIZED', gameId, { white, black, gameId, color: opposite(color) })
    }
}

export default useStartGame
