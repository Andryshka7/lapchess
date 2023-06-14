import { ChessBoard } from 'types'

export default function getPawnMoves([x, y]: number[], { gameField, enpassing }: ChessBoard) {
    if (y === 0 || y === 7) return []

    const moves = []
    let pawn = gameField[y][x].slice(0, 2)
    let k = pawn === 'wP' ? -1 : 1

    if (y === 1 && pawn === 'bP' && gameField[y + k][x] === '0') {
        moves.push([x, y + k], [x, y + 2 * k])
    } else if (y === 6 && pawn === 'wP' && gameField[y + k][x] === '0') {
        moves.push([x, y + k], [x, y + 2 * k])
    } else moves.push([x, y + k])

    if (x > 0 && gameField[y + k][x - 1] !== '0') moves.push([x - 1, y + k])
    if (x < 7 && gameField[y + k][x + 1] !== '0') moves.push([x + 1, y + k])

    if (enpassing) {
        const { x: enpX, y: enpY } = enpassing
        if (x > 0 && y === enpY && x - 1 === enpX) moves.push([x - 1, y + k])
        if (x < 7 && y === enpY && x + 1 === enpX) moves.push([x + 1, y + k])
    }

    return moves
}
