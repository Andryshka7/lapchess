import { PayloadAction } from '@reduxjs/toolkit'
import { Mastery } from 'pages/mastery/redux/types/Mastery'
import chessBoard from 'config/chessBoard/chessBoard'
import moveSound from 'assets/sounds/move.mp3'

const switchPosition = (state: Mastery, action: PayloadAction<number>) => {
    const {
        positionHistory,
        chessBoard: { chessMoves }
    } = state

    if (action.payload >= 0 && action.payload < positionHistory.length) {
        state.position = action.payload
        state.chessBoard = {
            ...chessBoard,
            ...positionHistory[state.position],
            chessMoves
        }
        new Audio(moveSound).play()
    }
}

export default switchPosition
