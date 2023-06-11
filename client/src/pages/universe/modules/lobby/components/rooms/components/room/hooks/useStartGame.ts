import { useAppSelector } from 'redux/store'
import { Room } from 'pages/universe/modules/lobby/types/Room'
import { useDispatch } from 'react-redux'
import { initializeGame } from 'pages/universe/modules/chess/store/chessSlice'
import getPlayers from './helpers/getPlayers'
import getColor from './helpers/getColor'
import createChessGame from 'api/chess games/createChessGame'
import socket from 'socket/socket'
import createDocument from './helpers/createDocument'

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

        socket.emit('GAME_INITIALIZED', gameId, { white, black, gameId, color: oppositeColor })
        socket.emit('JOIN_ROOM', gameId)
    }
}

export default useStartGame
