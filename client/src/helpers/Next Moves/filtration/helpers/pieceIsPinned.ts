import { findPiece, isInRange, opposite } from 'helpers'
import { ChessBoard } from 'types'

const pieceIsPinned = (piece: number[], chessBoard: ChessBoard) => {
	const { turn, gameField } = chessBoard

	const [pieceX, pieceY] = piece
	const [kingX, kingY] = findPiece(turn + 'K', gameField) as number[]

	const color = opposite(turn)

	if (gameField[pieceY][pieceX][1] === 'K') {
		return false
	}

	const theSameRow = pieceY === kingY
	const theSameColumn = pieceX === kingX
	const theSameDiagonal = Math.abs(pieceX - kingX) === Math.abs(pieceY - kingY)

	const areOnOneLine = theSameRow || theSameColumn || theSameDiagonal

	if (!areOnOneLine) {
		return false
	}

	const kX = Math.sign(kingX - pieceX)
	const kY = Math.sign(kingY - pieceY)

	for (let i = 1; pieceX + kX * i !== kingX || pieceY + kY * i !== kingY; i++) {
		const x = pieceX + kX * i
		const y = pieceY + kY * i

		if (gameField[y][x] !== '0') {
			return false
		}
	}
	for (let i = 1; isInRange(pieceX - kX * i, pieceY - kY * i); i++) {
		const x = pieceX - kX * i
		const y = pieceY - kY * i

		let piece = gameField[y][x].slice(0, 2)

		const pinnedByQueen = color + 'Q' === piece
		const pinnedByRook = color + 'R' === piece && (kX === 0 || kY === 0)
		const pinnedByBishop = color + 'B' === piece && kX !== 0 && kY !== 0

		if (pinnedByQueen || pinnedByRook || pinnedByBishop) {
			return true
		}
		if (piece !== '0') {
			return false
		}
	}

	return false
}

export default pieceIsPinned
