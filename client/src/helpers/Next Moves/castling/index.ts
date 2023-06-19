import { ChessBoard } from 'types'
import { longCastlingAllowed, shortCastlingAllowed } from './helpers'

const castlingMoves = ([x, y]: number[], chessBoard: ChessBoard) => {
    const castlingMoves = []

    if (longCastlingAllowed([x, y], chessBoard)) {
        castlingMoves.push([0, y])
    }
    if (shortCastlingAllowed([x, y], chessBoard)) {
        castlingMoves.push([7, y])
    }

    return castlingMoves
}

export default castlingMoves
