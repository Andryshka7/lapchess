import { PayloadAction } from '@reduxjs/toolkit'
import getNextMoves from 'helpers/Next Moves'

import { Chess } from '../../../types/Chess'

interface SelectPiecePayload {
	x: number
	y: number
}

const selectPiece = (state: Chess, action: PayloadAction<SelectPiecePayload>) => {
	const { chessBoard } = state
	const { x, y } = action.payload

	chessBoard.selected = { x, y }
	chessBoard.nextMoves = getNextMoves([x, y], chessBoard)
}

export default selectPiece
