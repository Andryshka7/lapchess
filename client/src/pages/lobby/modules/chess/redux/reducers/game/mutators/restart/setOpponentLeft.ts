import { PayloadAction } from '@reduxjs/toolkit'

import { Chess } from '../../../../types/Chess'

const setOpponentLeft = (state: Chess, action: PayloadAction<boolean>) => {
	state.status.opponentLeft = action.payload
}

export default setOpponentLeft
