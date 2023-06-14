import { useAppSelector } from 'redux/store'
import { useDispatch } from 'react-redux'
import createChessGame from 'api/chess games/createChessGame'
import socket from 'socket/socket'
import { initializeGame } from 'pages/lobby/store/actions'
import { getPlayers, getColor, createDocument } from './helpers'
import { Room } from 'types'

const useStartGame = () => {
    const dispatch = useDispatch()
    const guest = useAppSelector((store) => store.auth.user)

    return async (room: Room) => {
        const time = room.time
        const gameId = room._id

        const color = getColor(room.color)
        const oppositeColor = color === 'w' ? 'b' : 'w'
        const [white, black] = getPlayers(room.color, room.user, guest)

        const document = createDocument(white, black, gameId)

        await createChessGame(document)
        dispatch(initializeGame({ white, black, gameId, color }))

        socket.emit('JOIN_ROOM', gameId)
        socket.emit('GAME_INITIALIZED', gameId, { white, black, gameId, color: oppositeColor })
    }
}

export default useStartGame