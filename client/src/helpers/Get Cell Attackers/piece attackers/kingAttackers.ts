import { isInRange } from 'helpers'

const kingAttackers = ([x, y]: number[], gameField: string[][], color: string) => {
    const attackers = []

    let kings = [
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y - 1],
        [x, y - 1],
        [x + 1, y + 1],
        [x + 1, y]
    ]

    kings = kings.filter(([x, y]) => isInRange(x, y))

    for (const [x, y] of kings) {
        const piece = gameField[y][x].slice(0, 2)
        if (color + 'K' === piece) {
            attackers.push([x, y])
        }
    }

    return attackers
}

export default kingAttackers
