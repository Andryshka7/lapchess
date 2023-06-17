import { Lobby } from 'pages/lobby/redux/types/Lobby'

const clearField = (state: Lobby) => {
    const { chessBoard } = state.chess
    chessBoard.selected = null
    chessBoard.nextMoves = []
}

export default clearField
