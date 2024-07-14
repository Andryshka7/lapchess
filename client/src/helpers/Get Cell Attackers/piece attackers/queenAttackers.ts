import { isInRange } from 'helpers'

const getQueenAttackers = ([x, y]: number[], gameField: string[][], color: string) => {
	const attackers = []

	const directions = [
		[1, -1],
		[1, 0],
		[1, 1],
		[0, -1],
		[0, 1],
		[-1, -1],
		[-1, 0],
		[-1, 1]
	]

	for (const [kX, kY] of directions) {
		for (let i = 1; isInRange(x + kX * i, y + kY * i); i++) {
			const piece = gameField[y + kY * i][x + kX * i].slice(0, 2)
			if (piece === color + 'Q') {
				attackers.push([x + kX * i, y + kY * i])
			}
			if (piece !== '0') break
		}
	}

	return attackers
}
export default getQueenAttackers
