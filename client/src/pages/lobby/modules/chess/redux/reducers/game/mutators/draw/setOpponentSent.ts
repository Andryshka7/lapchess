import { PayloadAction } from '@reduxjs/toolkit'

import { Chess } from '../../../../types/Chess'

const setOpponentSent = (state: Chess, action: PayloadAction<boolean>) => {
	state.status.drawState.opponentSent = action.payload
}

export default setOpponentSent
