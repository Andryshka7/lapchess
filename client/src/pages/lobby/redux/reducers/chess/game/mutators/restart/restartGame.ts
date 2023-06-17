import { Lobby } from 'pages/lobby/redux/types/Lobby'
import chess from 'pages/lobby/redux/initialState/chess/chess'

const restartGame = (state: Lobby) => {
    const { color, white, black } = state.chess
    state.chess = {
        ...chess,
        color: color === 'w' ? 'b' : 'w',
        white: black,
        black: white
    }

    state.chess.restartStatus = {
        ownerAgreed: false,
        opponentAgreed: false
    }

    state.chess.opponentLeft = false
}

export default restartGame
