import {
    bishopAttackers,
    kingAttackers,
    knightAttackers,
    queenAttackers,
    rookAttackers
} from './piece attackers'
import pawnAttackers from './piece attackers/pawnAttackets'

const getCellAttackers = ([x, y]: number[], gameField: string[][], color: string) => {
    const checksArray = []

    checksArray.push(...kingAttackers([x, y], gameField, color))
    checksArray.push(...pawnAttackers([x, y], gameField, color))
    checksArray.push(...knightAttackers([x, y], gameField, color))
    checksArray.push(...rookAttackers([x, y], gameField, color))
    checksArray.push(...bishopAttackers([x, y], gameField, color))
    checksArray.push(...queenAttackers([x, y], gameField, color))

    return checksArray
}

export default getCellAttackers
