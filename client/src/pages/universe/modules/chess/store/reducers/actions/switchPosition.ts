import { PayloadAction } from '@reduxjs/toolkit'
import { Chess } from '../../types/InitialState'

const switchPosition = (state: Chess, action: PayloadAction<number>) => {
    const { chessBoard, positionHistory } = state
    const { chessMoves } = chessBoard

    if (action.payload >= 0 && action.payload < positionHistory.length) {
        state.position = action.payload
        state.chessBoard = { ...positionHistory[state.position], chessMoves }
    }
}

export default switchPosition
