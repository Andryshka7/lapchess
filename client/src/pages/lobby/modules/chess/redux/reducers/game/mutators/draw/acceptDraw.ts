import { PayloadAction } from '@reduxjs/toolkit'

import { Chess } from '../../../../types/Chess'
import setCurrentPosition from '../../../chessBoard/helpers/setCurrentPosition'
import stopTimer from '../../helpers/stopTimer'

const acceptDraw = (state: Chess, action: PayloadAction<number>) => {
	setCurrentPosition(state)

	const drawTime = action.payload

	const {
		chessBoard,
		position,
		positionHistory,
		status: { drawState }
	} = state

	drawState.opponentSent = false
	drawState.ownerSent = false
	chessBoard.gameStatus.draw = true

	positionHistory[position].gameStatus.draw = true
	stopTimer(state, drawTime)
}

export default acceptDraw
