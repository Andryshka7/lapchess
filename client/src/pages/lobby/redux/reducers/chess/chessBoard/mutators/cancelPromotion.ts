import { PromotedPawn } from 'types/ChessBoard'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

const cancelPromotion = (state: Lobby) => {
    const { chessBoard } = state.chess
    const { x1, y1, x2, y2, name, eaten } = chessBoard.promoted as PromotedPawn

    chessBoard.gameField[y1][x1] = name
    chessBoard.gameField[y2][x2] = eaten
    chessBoard.promoted = null
}

export default cancelPromotion
