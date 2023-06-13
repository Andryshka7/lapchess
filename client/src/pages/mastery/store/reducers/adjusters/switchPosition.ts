import { PayloadAction } from '@reduxjs/toolkit'
import { Mastery } from '../../types/Mastery'

const switchPosition = (state: Mastery, action: PayloadAction<number>) => {
    const { chessBoard, positionHistory } = state
    const { chessMoves } = chessBoard

    if (action.payload >= 0 && action.payload < positionHistory.length) {
        state.position = action.payload
        state.chessBoard = { ...chessBoard, ...positionHistory[state.position], chessMoves }
    }
}

export default switchPosition
