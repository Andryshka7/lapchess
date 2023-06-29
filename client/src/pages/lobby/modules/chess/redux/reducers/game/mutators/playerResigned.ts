import { PayloadAction } from '@reduxjs/toolkit'
import { Chess } from '../../../types/Chess'
import setCurrentPosition from '../../chessBoard/helpers/setCurrentPosition'
import stopTimer from '../helpers/stopTimer'

interface ResignPayload {
    color: string | null
    resignTime: number
}

const playerResigned = (state: Chess, action: PayloadAction<ResignPayload>) => {
    setCurrentPosition(state)

    const { color, resignTime } = action.payload

    const { chessBoard, position, positionHistory } = state
    const winner = color === 'w' ? 'b' : 'w'

    chessBoard.gameStatus.winner = winner
    positionHistory[position].gameStatus.winner = winner
    stopTimer(state, resignTime)
}

export default playerResigned
