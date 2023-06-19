import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import chessBoard from 'config/chessBoard/chessBoard'
import moveSound from 'assets/sounds/move.mp3'

const switchPosition = (state: Lobby, action: PayloadAction<number>) => {
    const { chess } = state
    const {
        positionHistory,
        chessBoard: { chessMoves }
    } = chess

    if (action.payload >= 0 && action.payload < positionHistory.length) {
        chess.position = action.payload
        chess.chessBoard = {
            ...chessBoard,
            ...positionHistory[chess.position],
            chessMoves
        }
        new Audio(moveSound).play()
    }
}

export default switchPosition
