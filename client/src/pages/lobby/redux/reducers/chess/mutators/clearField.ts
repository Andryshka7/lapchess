import { Lobby } from '../../../types/Lobby'

const clearField = (state: Lobby) => {
    const { chessBoard } = state.chess
    chessBoard.selected = null
    chessBoard.nextMoves = []
}

export default clearField
