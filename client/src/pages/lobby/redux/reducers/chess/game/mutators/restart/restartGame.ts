import { Lobby } from 'pages/lobby/redux/types/Lobby'
import chess from 'pages/lobby/redux/initialState/chess/chess'
import { opposite } from 'helpers'

const restartGame = (state: Lobby) => {
    const { color, white, black } = state.chess
    state.chess = {
        ...chess,
        color: opposite(color as string),
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
