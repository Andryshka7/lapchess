import { PayloadAction } from '@reduxjs/toolkit'
import { Mastery } from '../../types/Mastery'

const switchPosition = (state: Mastery, action: PayloadAction<number>) => {
    const {
        chessBoard: { chessMoves },
        positionHistory
    } = state

    if (action.payload >= 0 && action.payload < positionHistory.length) {
        state.position = action.payload
        state.chessBoard = { ...positionHistory[state.position], chessMoves }
    }
}

export default switchPosition
