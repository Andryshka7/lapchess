import chess from 'pages/lobby/redux/initialState/chess/chess'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

const resetChess = (state: Lobby) => {
    state.chess = chess
}

export default resetChess
