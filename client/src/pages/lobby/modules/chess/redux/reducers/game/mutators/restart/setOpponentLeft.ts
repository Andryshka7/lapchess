import { Chess } from '../../../../types/Chess'
import { PayloadAction } from '@reduxjs/toolkit'

const setOpponentLeft = (state: Chess, action: PayloadAction<boolean>) => {
    state.status.opponentLeft = action.payload
}

export default setOpponentLeft
