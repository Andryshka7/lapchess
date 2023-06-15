import { ChessBoard } from 'types'
import { rookMoves, bishopMoves } from './'

export default function queenMoves([x, y]: number[], chessBoard: ChessBoard) {
    return [...rookMoves([x, y], chessBoard), ...bishopMoves([x, y], chessBoard)]
}
