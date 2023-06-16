import { Lobby } from '../../../types/Lobby'
import chess from '../../../initialState/chess/chess'

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
}

export default restartGame
