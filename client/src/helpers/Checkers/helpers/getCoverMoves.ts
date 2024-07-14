import { ChessBoard } from 'types'

const getCoverMoves = (chessBoard: ChessBoard, checksArray: number[][]) => {
	const { gameField, gameStatus } = chessBoard

	const [check] = checksArray

	const coverMoves = []

	if (checksArray.length > 1) return []

	let [x1, y1] = gameStatus.check as number[]
	let [x2, y2] = check

	const kX = x2 > x1 ? 1 : x2 < x1 ? -1 : 0
	const kY = y2 > y1 ? 1 : y2 < y1 ? -1 : 0

	if (gameField[y2][x2][1] !== 'N')
		for (let i = 1; x1 + kX * i !== x2 || y1 + kY * i !== y2; i++)
			coverMoves.push([x1 + kX * i, y1 + kY * i])

	coverMoves.push([x2, y2])

	return coverMoves
}

export default getCoverMoves
