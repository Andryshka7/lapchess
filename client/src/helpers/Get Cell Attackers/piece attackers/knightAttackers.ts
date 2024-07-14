import { isInRange } from 'helpers'

const knightAttackers = ([x, y]: number[], gameField: string[][], color: string) => {
	const attackers = []

	let knights = [
		[x - 2, y - 1],
		[x - 1, y + 2],
		[x - 2, y + 1],
		[x + 1, y + 2],
		[x + 2, y - 1],
		[x - 1, y - 2],
		[x + 2, y + 1],
		[x + 1, y - 2]
	]

	knights = knights.filter(([x, y]) => isInRange(x, y))

	for (const [x, y] of knights) {
		const piece = gameField[y][x].slice(0, 2)
		if (color + 'N' === piece) {
			attackers.push([x, y])
		}
	}

	return attackers
}

export default knightAttackers
