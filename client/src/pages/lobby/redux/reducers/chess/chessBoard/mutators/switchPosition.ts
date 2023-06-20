import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import initialChessBoard from 'config/chessBoard/chessBoard'

const switchPosition = (state: Lobby, action: PayloadAction<number>) => {
    const { chess } = state
    const { positionHistory } = chess

    const { chessMoves } = positionHistory[positionHistory.length - 1]

    if (action.payload >= 0 && action.payload < positionHistory.length) {
        chess.position = action.payload
        chess.chessBoard = {
            ...initialChessBoard,
            ...positionHistory[chess.position],
            chessMoves
        }
    }
}

export default switchPosition
