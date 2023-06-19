import socket from 'socket/socket'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

const passToOpponent = (state: Lobby) => {
    const {
        gameId,
        chess: { chessBoard }
    } = state

    const { gameField, turn, enpassing, castling, gameStatus, chessMoves, coverMoves } = chessBoard
    const gameData = { gameField, turn, enpassing, castling, gameStatus, chessMoves, coverMoves }

    socket.emit('HANDLE_MOVE', gameId, gameData)
}

export default passToOpponent
