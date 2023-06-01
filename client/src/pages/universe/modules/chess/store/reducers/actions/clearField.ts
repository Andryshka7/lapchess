import { Chess } from '../../types/InitialState'

const clearField = (state: Chess) => {
    const { chessBoard } = state
    chessBoard.selected = null
    chessBoard.globalNextMoves = []
}

export default clearField
