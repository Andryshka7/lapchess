import { ChessBoard } from 'types'

const getRookMoves = ([x, y]: number[], chessBoard: ChessBoard) => {
	const { gameField } = chessBoard
	const moves = []

	for (let i = 1; x + i < 8; i++) {
		moves.push([x + i, y])
		if (gameField[y][x + i] !== '0') break
	}
	for (let i = 1; x - i >= 0; i++) {
		moves.push([x - i, y])
		if (gameField[y][x - i] !== '0') break
	}
	for (let i = 1; y + i < 8; i++) {
		moves.push([x, y + i])
		if (gameField[y + i][x] !== '0') break
	}
	for (let i = 1; y - i >= 0; i++) {
		moves.push([x, y - i])
		if (gameField[y - i][x] !== '0') break
	}

	return moves
}

export default getRookMoves
