import { Lobby } from 'pages/lobby/redux/types/Lobby'
import chess from 'pages/lobby/redux/initialState/chess/chess'
import socket from 'socket/socket'
import { deleteChessGame } from 'api/chess games'

const quitGame = (state: Lobby) => {
    const { opponentLeft } = state.chess
    
    if (opponentLeft) deleteChessGame(state.gameId as string)
    else socket.emit('LEAVE_FROM_GAME', state.gameId)

    state.gameId = null
    state.chess = chess
}

export default quitGame
