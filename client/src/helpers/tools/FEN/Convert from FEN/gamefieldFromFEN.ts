import uniquePiece from './uniquePiece'

export default function gameFielFromFEN(field: string) {
	const gameField = []
	const rows = field.split('/')

	const existingPieces = {
		Q: { w: 0, b: 0 },
		P: { w: 0, b: 0 },
		R: { w: 0, b: 0 },
		N: { w: 0, b: 0 },
		B: { w: 0, b: 0 },
		K: { w: 0, b: 0 }
	}

	for (let row of rows) {
		const newRow = ['0', '0', '0', '0', '0', '0', '0', '0']
		let skip = 0

		for (let piece of row) {
			if (Number(piece)) skip += Number(piece)
			else {
				const turn = piece === piece.toUpperCase() ? 'w' : 'b'
				newRow[skip] = uniquePiece(existingPieces, turn + piece.toUpperCase()) as string
				skip += 1
			}
		}
		gameField.push(newRow)
	}

	return gameField
}
