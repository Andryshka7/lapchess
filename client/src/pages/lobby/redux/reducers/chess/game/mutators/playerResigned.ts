import { PayloadAction } from '@reduxjs/toolkit'
import { Lobby } from 'pages/lobby/redux/types/Lobby'
import setCurrentPosition from '../../chessBoard/helpers/setCurrentPosition'

const playerResigned = (state: Lobby, action: PayloadAction<string>) => {
    setCurrentPosition(state)

    const { chessBoard, position, positionHistory } = state.chess
    const winner = action.payload === 'w' ? 'b' : 'w'

    chessBoard.gameStatus.winner = winner
    positionHistory[position].gameStatus.winner = winner
}

export default playerResigned
