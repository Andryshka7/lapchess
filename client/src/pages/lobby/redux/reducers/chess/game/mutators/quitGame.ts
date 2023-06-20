import { Lobby } from 'pages/lobby/redux/types/Lobby'
import chess from 'pages/lobby/redux/initialState/chess/chess'
import { deleteGame } from 'api/chess games'
import socket from 'socket'
const quitGame = (state: Lobby) => {
    const { opponentLeft } = state.chess

    if (opponentLeft) deleteGame(state.gameId as string)
    else socket.emit('LEAVE_FROM_GAME', state.gameId)

    state.gameId = null
    state.chess = chess
}

export default quitGame
