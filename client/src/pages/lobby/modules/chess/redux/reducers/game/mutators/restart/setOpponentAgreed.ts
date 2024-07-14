import { PayloadAction } from '@reduxjs/toolkit'

import { Chess } from '../../../../types/Chess'

const setOpponentAgreed = (state: Chess, action: PayloadAction<boolean>) => {
	state.status.restartState.opponentAgreed = action.payload
}

export default setOpponentAgreed
