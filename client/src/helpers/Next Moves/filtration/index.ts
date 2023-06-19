import getCellAttackers from '../../Get Cell Attackers'
import { pieceIsPinned, pinFilter, getCastlingMoves } from './helpers'
import { isInRange, findPiece } from 'helpers'
import { ChessBoard } from 'types'

export default function filter([x, y]: number[], nextMoves: number[][], chessBoard: ChessBoard) {
    const { gameField, turn, coverMoves } = chessBoard

    const king = findPiece(turn + 'K', gameField) as number[]

    let [color, piece] = gameField[y][x]

    let newMoves = nextMoves.filter(([x, y]) => isInRange(x, y) && gameField[y][x][0] !== color)

    if (piece === 'K') {
        newMoves = newMoves.filter((move) => {
            const imagined = JSON.parse(JSON.stringify(gameField))
            const [a, b] = move
            imagined[b][a] = gameField[y][x]
            imagined[y][x] = '0'

            return !getCellAttackers(move, imagined, turn === 'w' ? 'b' : 'w').length
        })
        newMoves.push(...getCastlingMoves([x, y], chessBoard))
    }

    if (piece === 'P') newMoves = newMoves.filter(([a, b]) => !(a === x && gameField[b][a] !== '0'))

    if (coverMoves.length && piece !== 'K') {
        newMoves = newMoves.filter((move) => coverMoves.includesDeeply(move))
    }

    if (pieceIsPinned([x, y], gameField))
        newMoves = newMoves.filter((move) => pinFilter(move, [x, y], king))

    return newMoves
}
