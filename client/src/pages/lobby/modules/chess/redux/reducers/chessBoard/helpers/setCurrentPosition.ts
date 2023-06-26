import { createCopy } from 'helpers'
import { Chess } from '../../../types/Chess'
import initialChessBoard from 'config/chessBoard/chessBoard'

const setCurrentPosition = (state: Chess) => {
    const { positionHistory } = state

    state.position = positionHistory.length - 1
    const lastState = createCopy(positionHistory[state.position])

    state.chessBoard = { ...initialChessBoard, ...lastState }
}

export default setCurrentPosition
