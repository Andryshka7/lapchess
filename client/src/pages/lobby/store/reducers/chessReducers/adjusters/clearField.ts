import { Lobby } from '../../../types/Lobby'

const clearField = (state: Lobby) => {
    const { chessBoard } = state.chess
    chessBoard.selected = null
    chessBoard.globalNextMoves = []
}

export default clearField
