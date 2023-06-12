import socket from 'socket/socket'
import { Chess } from '../../../types/InitialState'

const passToOpponent = ({ chessBoard, gameId }: Chess) => {
    const { gameField, turn, enpassing, castling, checkStatus, chessMoves, coverMoves } = chessBoard
    const gameData = { gameField, turn, enpassing, castling, checkStatus, chessMoves, coverMoves }
    socket.emit('HANDLE_MOVE', gameId, gameData)
}

export default passToOpponent
