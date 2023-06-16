import { Mastery } from '../../types/Mastery'

const clearField = (state: Mastery) => {
    const { chessBoard } = state
    chessBoard.selected = null
    chessBoard.nextMoves = []
}

export default clearField
