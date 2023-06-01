import { PayloadAction } from '@reduxjs/toolkit'
import { Chess } from '../../types/InitialState'

const switchCurrent = (state: Chess, action: PayloadAction<number>) => {
    const { chessBoard, chessBoardStates } = state
    const { chessMoves } = chessBoard

    if (action.payload >= 0 && action.payload < chessBoardStates.length) {
        state.current = action.payload
        state.chessBoard = { ...chessBoardStates[state.current], chessMoves }
    }
}

export default switchCurrent
