import { kingMovesFilter } from './filters'
import { pinFilter } from './filters'
import { isInRange, findPiece } from 'helpers'
import { ChessBoard } from 'types'
import pieceIsPinned from './helpers/pieceIsPinned'

const filter = ([x, y]: number[], nextMoves: number[][], chessBoard: ChessBoard) => {
    const {
        gameField,
        turn,
        coverMoves,
        gameStatus: { check }
    } = chessBoard

    const king = findPiece(turn + 'K', gameField) as number[]

    let [color, piece] = gameField[y][x]

    let newMoves = nextMoves.filter(([x, y]) => isInRange(x, y) && gameField[y][x][0] !== color)

    if (piece === 'K') {
        newMoves = kingMovesFilter(newMoves, chessBoard)
    }

    if (piece === 'P') {
        newMoves = newMoves.filter(([a, b]) => !(a === x && gameField[b][a] !== '0'))
    }

    if (check && piece !== 'K') {
        newMoves = newMoves.filter((move) => coverMoves.includesDeeply(move))
    }

    if (pieceIsPinned([x, y], chessBoard)) {
        newMoves = newMoves.filter((move) => pinFilter(move, [x, y], king))
    }

    return newMoves
}

export default filter
