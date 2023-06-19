import { findPiece, opposite } from 'helpers'
import getCellAttackers from 'helpers/Get Cell Attackers'
import { ChessBoard } from 'types'

const kingMovesFilter = (nextMoves: number[][], chessBoard: ChessBoard) => {
    const { turn, gameField } = chessBoard

    const [x1, y1] = findPiece(turn + 'K', gameField) as number[]

    nextMoves = nextMoves.filter(([x, y]) => {
        gameField[y1][x1] = '0'
        const attackers = getCellAttackers([x, y], gameField, opposite(turn))
        gameField[y1][x1] = turn + 'K'
        return !attackers.length
    })

    return nextMoves
}

export default kingMovesFilter
