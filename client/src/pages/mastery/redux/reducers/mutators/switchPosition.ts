import { PayloadAction } from '@reduxjs/toolkit'
import initialChessBoard from 'config/chessBoard/chessBoard'
import { Mastery } from 'pages/mastery/redux/types/Mastery'

const switchPosition = (state: Mastery, action: PayloadAction<number>) => {
	const {
		positionHistory,
		chessBoard: { chessMoves }
	} = state

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
