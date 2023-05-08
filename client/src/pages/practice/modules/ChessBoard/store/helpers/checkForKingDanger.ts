import { ChessBoard, ChessPiece } from '../types/ChessBoard'
import getCoverMoves from './getCoverMoves'
import { findPiece } from './Next moves/filtration/helpers'
import isUnderAttack from './Next moves/filtration/isUnderAttack'

const checkForKingDanger = (state: ChessBoard) => {
    const { turn, gameField } = state
    state.checkStatus = null
    state.coverMoves = []

    const king = findPiece(((turn === 'w' ? 'b' : 'w') + 'K') as ChessPiece, gameField)
    const checksArray = isUnderAttack(king, gameField, turn)

    if (checksArray.length) {
        state.checkStatus = king
        // state.chessMoves[chessBoard.chessMoves.length - 1].move += '+'
        state.coverMoves = getCoverMoves(state, checksArray)

        // if (checkMate(chessBoard)) {
        // chessBoard.chessMoves[chessBoard.chessMoves.length - 1].move += '+'
        // }
    }
}

export default checkForKingDanger
