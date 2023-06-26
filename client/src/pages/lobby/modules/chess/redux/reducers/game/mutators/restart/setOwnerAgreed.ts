import { PayloadAction } from '@reduxjs/toolkit'
import { Chess } from '../../../../types/Chess'

const setOwnerAgreed = (state: Chess, action: PayloadAction<boolean>) => {
    state.status.restartState.ownerAgreed = action.payload
}

export default setOwnerAgreed
