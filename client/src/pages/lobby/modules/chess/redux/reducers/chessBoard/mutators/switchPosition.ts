import { PayloadAction } from '@reduxjs/toolkit'
import initialChessBoard from 'config/chessBoard/chessBoard'

import { Chess } from '../../../types/Chess'

const switchPosition = (state: Chess, action: PayloadAction<number>) => {
	const { positionHistory } = state

	const { chessMoves } = positionHistory[positionHistory.length - 1]

	if (action.payload >= 0 && action.payload < positionHistory.length) {
		state.position = action.payload
		state.chessBoard = {
			...initialChessBoard,
			...positionHistory[state.position],
			chessMoves
		}
	}
}

export default switchPosition
