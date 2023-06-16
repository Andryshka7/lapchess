import { Lobby } from '../types/Lobby'
import chess from '../initialState/chess/chess'
import socket from 'socket/socket'
import deleteChessGame from 'api/chess games/deleteChessGame'

const quitGame = (state: Lobby) => {
    if (state.chess.opponentLeft) {
        deleteChessGame(state.gameId as string)
    }
    socket.emit('LEAVE_FROM_GAME', state.gameId)
    state.gameId = null
    state.chess = chess
}

export default quitGame
