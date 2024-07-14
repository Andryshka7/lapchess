const findPiece = (piece: string, gameField: string[][]) => {
	for (let y = 0; y < 8; y++) {
		for (let x = 0; x < 8; x++) {
			if (gameField[y][x] === piece) {
				return [x, y]
			}
			if (piece[1] === 'P') {
				const options = ['Q', 'R', 'B', 'N']
				for (let i of options) {
					if (gameField[y][x].replace(i, '') === piece) {
						return [x, y]
					}
				}
			}
		}
	}
	return null
}

export default findPiece
