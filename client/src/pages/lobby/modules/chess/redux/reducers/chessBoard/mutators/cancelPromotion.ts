import { PromotedPawn } from 'types/ChessBoard'
import { Chess } from '../../../types/Chess'

const cancelPromotion = (state: Chess) => {
    const { chessBoard } = state
    const { x1, y1, x2, y2, name, eaten } = chessBoard.promoted as PromotedPawn

    chessBoard.gameField[y1][x1] = name
    chessBoard.gameField[y2][x2] = eaten
    chessBoard.promoted = null
}

export default cancelPromotion
