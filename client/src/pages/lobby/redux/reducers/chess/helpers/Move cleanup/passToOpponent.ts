import socket from 'socket/socket'
import { Lobby } from '../../../../types/Lobby'

const passToOpponent = (state: Lobby) => {
    const {
        gameId,
        chess: { chessBoard }
    } = state

    const { gameField, turn, enpassing, castling, checkStatus, chessMoves, coverMoves } = chessBoard
    const gameData = { gameField, turn, enpassing, castling, checkStatus, chessMoves, coverMoves }

    socket.emit('HANDLE_MOVE', gameId, gameData)
}

export default passToOpponent
