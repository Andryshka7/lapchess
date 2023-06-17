import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'

const playerResigned = (state: Lobby, action: PayloadAction<string>) => {
    const { position, chessBoard, positionHistory } = state.chess
    const winner = action.payload === 'w' ? 'b' : 'w'

    const lastState = positionHistory[positionHistory.length - 1]

    if (position === positionHistory.length - 1) {
        chessBoard.gameStatus.winner = winner
    }

    if (lastState.gameStatus) {
        lastState.gameStatus.winner = winner
    }
}

export default playerResigned
