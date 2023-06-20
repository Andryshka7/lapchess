import { PayloadAction } from '@reduxjs/toolkit'
import { Mastery } from 'pages/mastery/redux/types/Mastery'
import initialChessBoard from 'config/chessBoard/chessBoard'

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
