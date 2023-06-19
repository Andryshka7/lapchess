import { ChessBoard } from 'types'
import {
    bishopMoves,
    rookMoves,
    knightMoves,
    kingMoves,
    pawnMoves,
    queenMoves
} from './piece moves'
import filter from './filtration'
import castlingMoves from './castling'

const getMovesFn = {
    K: kingMoves,
    N: knightMoves,
    Q: queenMoves,
    B: bishopMoves,
    P: pawnMoves,
    R: rookMoves
}

const getNextMoves = ([x, y]: number[], chessBoard: ChessBoard) => {
    if (chessBoard.gameField[y][x] === '0') return []

    let piece = chessBoard.gameField[y][x][1] as keyof typeof getMovesFn
    const getNextMoves = getMovesFn[piece]

    const pieceMoves = getNextMoves([x, y], chessBoard)
    const filtered = filter([x, y], pieceMoves, chessBoard)

    if (chessBoard.gameField[y][x][1] === 'K') {
        filtered.push(...castlingMoves([x, y], chessBoard))
    }

    return filtered
}

export default getNextMoves
