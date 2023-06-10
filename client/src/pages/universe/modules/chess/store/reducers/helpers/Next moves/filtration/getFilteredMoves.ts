import pieceIsPinned from './pieceIsPinned'
import isUnderAttack from './isUnderAttack'
import castlingMoves from './getCastlingMoves'
import { ChessBoard } from '../../../../types/ChessBoard'
import { findPiece, isInRange, pinFilter } from './helpers'

export default function filter([x, y]: number[], nextMoves: number[][], chessBoard: ChessBoard) {
    const { gameField, turn, coverMoves } = chessBoard

    const king = findPiece(turn + 'K', gameField) as number[]

    let [color, piece] = gameField[y][x]

    let newMoves = nextMoves.filter(([x, y]) => isInRange(x, y) && gameField[y][x][0] !== color)

    if (piece === 'K') {
        newMoves = newMoves.filter(
            (move) => !isUnderAttack(move, gameField, turn === 'w' ? 'b' : 'w').length
        )
        newMoves.push(...castlingMoves([x, y], chessBoard))
    }

    if (piece === 'P') newMoves = newMoves.filter(([a, b]) => !(a === x && gameField[b][a] !== '0'))

    if (coverMoves.length && piece !== 'K') {
        newMoves = newMoves.filter((move) => coverMoves.includesDeeply(move))
    }

    if (pieceIsPinned([x, y], gameField))
        newMoves = newMoves.filter((move) => pinFilter(move, [x, y], king))

    return newMoves
}
