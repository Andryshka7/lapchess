import { PayloadAction } from '@reduxjs/toolkit'
import { Chess } from '../../../types/Chess'
import setCurrentPosition from '../../chessBoard/helpers/setCurrentPosition'

const playerResigned = (state: Chess, action: PayloadAction<string>) => {
    setCurrentPosition(state)

    const { chessBoard, position, positionHistory } = state
    const winner = action.payload === 'w' ? 'b' : 'w'

    chessBoard.gameStatus.winner = winner
    positionHistory[position].gameStatus.winner = winner
}

export default playerResigned
