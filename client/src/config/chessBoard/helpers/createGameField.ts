const createGameField = (array: string[][]) => {
	const gameField: string[][] = array

	const pieceCount: { [key: string]: number } = {
		wP: 0,
		wR: 0,
		wN: 0,
		wB: 0,
		bP: 0,
		bR: 0,
		bN: 0,
		bB: 0
	}

	for (let y = 0; y < 8; y++) {
		for (let x = 0; x < 8; x++) {
			if (array[y][x] !== '0' && Object.keys(pieceCount).includes(array[y][x])) {
				gameField[y][x] += ++pieceCount[array[y][x]]
			}
		}
	}

	return gameField
}

export default createGameField
