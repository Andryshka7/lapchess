import { ChessBoard } from 'pages/practice/modules/ChessBoard/types/ChessBoard'
import rookMoves from './Rook'
import bishopMoves from './Bishop'

export default function queenMoves([x, y]: number[], chessBoard: ChessBoard) {
    return [...rookMoves([x, y], chessBoard), ...bishopMoves([x, y], chessBoard)]
}
