import { PayloadAction } from '@reduxjs/toolkit'
import { Chess } from '../../../../types/Chess'

const setOwnerSent = (state: Chess, action: PayloadAction<boolean>) => {
    state.status.drawState.ownerSent = action.payload
}

export default setOwnerSent
