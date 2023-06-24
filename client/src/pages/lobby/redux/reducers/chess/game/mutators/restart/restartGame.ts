import { Lobby } from 'pages/lobby/redux/types/Lobby'
import chess from 'pages/lobby/redux/initialState/chess/chess'
import { opposite } from 'helpers'

const restartGame = (state: Lobby) => {
    const { color, white, black } = state.chess
    state.chess = {
        ...chess,
        color: opposite(color as string),
        white: black,
        black: white,
        status: {
            ...chess.status,
            isActive: true
        }
    }
}

export default restartGame
