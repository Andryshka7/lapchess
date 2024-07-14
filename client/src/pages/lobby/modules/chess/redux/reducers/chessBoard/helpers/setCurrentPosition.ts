import initialChessBoard from 'config/chessBoard/chessBoard'
import { createCopy } from 'helpers'

import { Chess } from '../../../types/Chess'

const setCurrentPosition = (state: Chess) => {
	const { positionHistory } = state

	state.position = positionHistory.length - 1
	const lastState = createCopy(positionHistory[state.position])

	state.chessBoard = { ...initialChessBoard, ...lastState }
}

export default setCurrentPosition
