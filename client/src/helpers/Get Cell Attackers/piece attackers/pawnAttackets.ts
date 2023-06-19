import { isInRange } from 'helpers'

const pawnAttackers = ([x, y]: number[], gameField: string[][], color: string) => {
    const attackers = []

    const kY = color === 'w' ? 1 : -1

    let pawns = [
        [x - 1, y + kY],
        [x + 1, y + kY]
    ]

    pawns = pawns.filter(([x, y]) => isInRange(x, y))

    for (const [x, y] of pawns) {
        const piece = gameField[y][x].slice(0, 2)
        if (color + 'P' === piece) {
            attackers.push([x, y])
        }
    }

    return attackers
}

export default pawnAttackers
