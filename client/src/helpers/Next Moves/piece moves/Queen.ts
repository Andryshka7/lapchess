import { ChessBoard } from 'types'
import rookMoves from './Rook'
import bishopMoves from './Bishop'

const queenMoves = ([x, y]: number[], chessBoard: ChessBoard) => {
    return [...rookMoves([x, y], chessBoard), ...bishopMoves([x, y], chessBoard)]
}

export default queenMoves
