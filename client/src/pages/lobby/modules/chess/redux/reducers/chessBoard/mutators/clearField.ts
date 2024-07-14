import { Chess } from '../../../types/Chess'

const clearField = (state: Chess) => {
	const { chessBoard } = state
	chessBoard.selected = null
	chessBoard.nextMoves = []
}

export default clearField
