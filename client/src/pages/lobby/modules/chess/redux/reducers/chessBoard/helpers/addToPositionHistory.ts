import { Chess } from '../../../types/Chess'

const addToPositionHistory = (state: Chess) => {
	const { chessBoard, positionHistory } = state

	const { gameField, turn, enpassing, castling, gameStatus, chessMoves, coverMoves } = chessBoard

	const gameData = {
		turn,
		gameField,
		enpassing,
		castling,
		gameStatus,
		chessMoves,
		coverMoves
	}

	state.position += 1
	positionHistory.push(gameData)
}

export default addToPositionHistory
